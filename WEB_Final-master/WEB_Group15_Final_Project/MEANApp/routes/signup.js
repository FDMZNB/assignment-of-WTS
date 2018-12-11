var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

router.route('/').post(function (req, res) {
	User.findOne({ name: req.body.name }, function (err, users) {
		if (err) throw err;
		if (users) {
          res.json({ Failed: true, message: 'username '+ req.body.name + ' already exist!'});
        } else{
			user = new User({
				name: req.body.name,
				password: req.body.password,
				email: req.body.email,
			});
			user.save();
			res.json({ Failed: false, message: 'User Created !' });
        }
    });
});

module.exports = router;