var express = require('express');
var router = express.Router();

var users = require('../models/User.js');



router.route('/:findUser_id').get(function (req, res) {
  users.findById(req.params.findUser_id, function (err, doc) {
    if (err) res.send(err);
    res.json(doc);
  });
});

//update
router.route('/:user_id').post(function (req, res) {
	users.findById(req.params.user_id, function (err, users) {
		if (err) throw err;
		users.ban_flag = req.body.ban_flag;
		users.save(function (err) {
            if (err) 
                res.send(err);
            res.send({ Failed: false, data: users })
		});
	});
});



// Return router
module.exports = router;