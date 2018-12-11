var express = require('express');
var router = express.Router();
var post = require('../models/Post.js');

router.route('/').get(function (req, res) {
    post.find(function (err, doc) {
        if (err) res.send(err);
        res.json(doc);
    });
});

module.exports = router;