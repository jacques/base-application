'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var log = require('bunyan').createLogger({
  name: 'baseapp',
  stream: process.stdout,
  level: 'info'
});

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'baseapp_development'
  }
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

bookshelf.model('Country', bookshelf.Model.extend({
  tableName: 'countries'
}));

bookshelf.model('Province', bookshelf.Model.extend({
  tableName: 'provinces',
  country: function() {
    return this.belongsTo(bookshelf.model('Country'));
  }
}));

bookshelf.model('User', bookshelf.Model.extend({
  tableName: 'users',
  country: function() {
    return this.belongsTo(bookshelf.model('Country'));
  },
  province: function() {
    return this.belongsTo(bookshelf.model('Province'));
  }
}));

var routes = require('./routes/index');

var app = express();

app.use(require('express-bunyan-logger')({
  name: 'logger',
  streams: [{
    level: 'info',
    stream: process.stdout
  }]
}));

app.use(function(req, res, next) {
  req.db = bookshelf;
  req.model = bookshelf.model.bind(bookshelf);
  return next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

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
