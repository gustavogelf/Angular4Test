'use strict';

let Post = require('../models/post.js');

module.exports = {
  getPosts,
  deletePosts,
};

function getPosts(req, res, next) {

  Post.findAccepted({}, req.query.sort)
  .then((posts) => res.json(posts))
  .catch(next);
}

function deletePosts(req, res, next) {
  let _id = req.params;

  Post.findOneAndUpdate({_id}, {
    $set: {
      deleted_at: Date.now()
    }
  }, {new: true})
  .then((posts) => res.json(posts))
  .catch(next);
}
