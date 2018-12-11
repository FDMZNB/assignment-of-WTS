var express = require('express');
var router = express.Router();

var posts = require('../models/Post.js');

//delete
router.route('/:post_id').delete(function (req, res) {
    posts.deleteOne({ _id: req.params.post_id }, function (err, doc) {
        if (err) res.send(err);
        res.json({ Failed: false, message: 'Successfully deleted !' });
    })
});


// Return router
module.exports = router;
