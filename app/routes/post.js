'use strict';

let Post = require('../models/post.js');

module.exports = {
  getPosts,
};

function getPosts(req, res, next) {
  res.header('Content-Type', 'application/json');
  Post.findAccepted({}, req.query.sort)
  .then((posts) => res.json(posts))
  .catch(next);
}
