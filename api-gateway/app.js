/*
============================================
; Title: api-gateway
; Author: Professor Krasso
; Date: October 18 2020
; Modified By: Sarah Massie
; Description: Making a REST API
;===========================================
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apiCatalog = require('./routes/api-catalog')
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var indexRouter = require('./routes/index');

// database connection
const conn = 'mongodb+srv://admin:admin@buwebdev-cluster-1.eate3.mongodb.net/api-gateway?retryWrites=true&w=majority'
mongoose.connect( conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true, 
}).then ( () =>
  console.log('Connection to the database instance was successful')
).catch( (err) => {
  console.log('MongoDB Error: ${err.message}')
}); // end mongoose connection

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiCatalog);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
