var express = require('express');
var logger = require('morgan');
var urlRouter = require('./routes/url-router');
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/urls', urlRouter);
app.use('/api', indexRouter);

module.exports = app;
