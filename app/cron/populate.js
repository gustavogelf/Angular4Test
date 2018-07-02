'use strict';

const axios = require('axios');
const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const Post = require('../models/post.js');

module.exports = populate;

async function populate() {
  await mongoose.connect('mongodb://localhost/reigndesign');

  let response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');

  await Promise.map(response.data.hits, (post) => {
    return Post.updateOrCreate(post);
  });

  console.log('DB Populated');
};
