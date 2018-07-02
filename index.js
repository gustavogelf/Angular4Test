'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/reigndesign');

const port = process.env.PORT || 5000;

let {getPosts} = require('./app/routes/post.js');

app.use(cors());
app.use(helmet());
app.use('/', express.static(__dirname + '/dist/angular4test'));

app.get('/api/posts', getPosts);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
