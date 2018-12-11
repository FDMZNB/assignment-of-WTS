var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/account', function(req, res, next) {
  res.render('account');
});

router.get('/addpost', function(req, res, next) {
  res.render('addpost');
});

router.get('/viewpost', function(req, res, next) {
  res.render('viewpost');
});

router.get('/userinfo', function (req, res, next) {
  res.render('userinfo');
});

router.get('/postinfo', function (req, res, next) {
  res.render('postinfo');
});


router.get('/edit_user', function (req, res, next) {
  res.render('edit_user');
});

router.get('/weather', function (req, res, next) {
  res.render('weather');
});


module.exports = router;
