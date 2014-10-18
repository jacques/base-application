var express = require('express');
var router = express.Router();

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
  res.render('admin/users/index', { title: 'Base Application - Admin - Users' });
});

module.exports = router;
