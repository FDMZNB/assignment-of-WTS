var express = require('express');
var router = express.Router();

// var posts = require('../models/Post.js');
var users = require('../models/User.js');
var comment = require('../models/Comment.js')

//get user by id
router.route('/:user_id').get(function (req, res) {
    users.findById(req.params.user_id, function (err, doc) {
		if (err) res.send(err);
		res.json(doc);
    });
});

//create
router.route('/').post(function (req, res) {
    var u = new comment();
    u.content = req.body.content;
    u.author = req.body.author;
    u.created = req.body.created; 
    u.post = req.body.post;

    u.save(function (err) {
        if (err) res.send(err);
        res.send({ Failed: false, data: u })
    });
});


// Return router
module.exports = router;
