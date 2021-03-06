'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/reigndesign');

const port = process.env.PORT || 5000;

let {getPosts, deletePosts} = require('./app/routes/post.js');

require('./app/cron/index');

app.use(cors());
app.use(helmet());

app.get('/api/posts', getPosts);
app.delete('/api/posts/:_id', deletePosts);

app.use('/', express.static(__dirname + '/dist/angular4-test'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
