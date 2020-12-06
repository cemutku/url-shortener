var express = require('express');
var logger = require('morgan');
var urlRouter = require('./routes/url-router');
var indexRouter = require('./routes/index');
const { notFound, errorHandler } = require('./middleware/error-middleware');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/urls', urlRouter);
app.use('/', indexRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
