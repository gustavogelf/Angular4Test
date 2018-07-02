'use strict';

let mongoose = require('mongoose');
let _ = require('lodash');
let {Schema} = mongoose;

let schema = new Schema({
  objectID: {
    type: String,
    index: true,
    unique: true,
  },
  title: String,
  url: String,
  author: String,
  points: Number,
  num_comments: Number,
  parent_id: Number,
  story_id: Number,
  story_url: String,
  story_text: String,
  story_title: String,
  comment_text: String,
  _tags: [String],
  _highlightResult: Object,
  deleted_at: Date,
  created_at: Date,
  created_at_i: Number,
});

Object.assign(schema.statics, {
  findAccepted,
  updateOrCreate
});

function findAccepted(query, sort) {
  let accepted = {
    deleted_at: {$eq: null},
    $or: [{
      title: {$ne: null}
    }, {
      story_title: {$ne: null}
    }]
  };
  return this.find(_.merge({}, query, accepted)).sort(sort || '-created_at');
}

async function updateOrCreate(data) {
  let {objectID} = data;
  let options = {
    new: true,
    upsert: true,
    runValidators: true
  };
  return await this.findOneAndUpdate({objectID}, {$set: data}, options);
}

module.exports = mongoose.model('Post', schema);
