var express = require('express');
var router = express.Router();
var users = require('../models/User.js');

router.route('/').get(function (req, res) {
    users.find(function (err, doc) {
        if (err) res.send(err);
        res.json(doc);
    });
});

//get user by id
router.route('/:user_id').get(function (req, res) {
    users.findById(req.params.user_id, function (err, doc) {
		if (err) res.send(err);
		res.json(doc);
    });
});



module.exports = router;