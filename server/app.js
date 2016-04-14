var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var groups = require('./routes/groups');
var members = require('./routes/members');
var activities = require('./routes/activities')
var locations = require('./routes/locations')
var businesses = require('./routes/businesses')
var activity_members = require('./routes/activity_members')
var preferences = require('./routes/preferences')
var categories = require('./routes/categories')
var invite = require('./routes/invite')
// var invites = require('./routes/invites')

var app = express();
//// TURN BACK ON THE SCHEDULER AFTER THE DEMO /////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Allow cross origin access
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/groups', groups);
app.use('/members', members);
app.use('/activities', activities);
app.use('/locations', locations);
app.use('/businesses', businesses);
app.use('/activity_members', activity_members);
app.use('/preferences', preferences);
app.use('/categories', categories);
app.use('/invite', invite);
// app.use('/invites', invites);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
