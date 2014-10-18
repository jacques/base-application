var express = require('express');
var router = express.Router();

var Country = require('../app/models/country.js');
var Province = require('../app/models/province.js');
var User = require('../app/models/user.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Base Application' });
});

/* GET profile page */
router.get('/profile', function(req, res) {
  res.render('profile/index', { title: 'Base Application - Your Profile' });
});

/* POST profile page */
router.post('/profile', function(req, res) {
  res.render('profile/index', { title: 'Base Application - Your Profile' });
});

/* GET profile edit page */
router.get('/profile/edit', function(req, res) {
  res.render('profile/edit', { title: 'Base Application - Edit Your Profile' });
});

/* GET admin page */
router.get('/admin', function(req, res) {
  res.render('admin/index', { title: 'Base Application - Admin' });
});

/* GET admin users page */
router.get('/admin/users', function(req, res) {
  User.fetchAll({
    withRelated: ['country', 'province']
  }).then(function(users) {
    res.render('admin/users/index', { title: 'Base Application - Admin - Users', users: users.toJSON() });
  });
});

module.exports = router;
