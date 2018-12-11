var express = require('express');
var router = express.Router();

var post = require('../models/Post.js');
var users = require('../models/User.js');
var comment = require('../models/Comment.js')


//get post by id
router.route('/:post_id').get(function (req, res) {
    post.findById(req.params.post_id, function (err, doc) {
		  if (err) res.send(err);
		  res.json(doc);
    });
});
//get reviwer's information by userid
router.route('/reviewer/:user_id').get(function (req, res) {
  users.findById(req.params.user_id, function (err, doc) {
    if (err) res.send(err);
    res.json(doc);
  });
});

//get comments info by postid
router.route('/viewcomment/:post_id').get(function (req, res) {
  comment.find({post:req.params.post_id}, function (err, doc) {
    if (err) res.send(err);
    res.json(doc);
  });
});



// Return router
module.exports = router;