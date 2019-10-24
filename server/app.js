var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var proxy = require('http-proxy-middleware');
var config = require("config");

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/rc_api',
  proxy({
    target: `http://127.0.0.1:${config.get("rclone_port")}`, changeOrigin: true })
);
app.use('/', indexRouter);

module.exports = app;
