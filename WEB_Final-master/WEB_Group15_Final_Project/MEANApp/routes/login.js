var express = require('express');
var router = express.Router();
var user = require('../models/User.js');

router.route('/').post(function (req, res) {
	user.findOne({ name: req.body.name }, function (err, users) {
		if (err) throw err;
		if (!users) {
          res.json({ Failed: true, message: 'username not found' });
        } else {
            if (users.password != req.body.password) {
                res.json({ Failed: true, message: 'username and password donot match ' });
            } else {
				res.json({ Failed: false, user: users });
            }
        }
    });
});
module.exports = router;