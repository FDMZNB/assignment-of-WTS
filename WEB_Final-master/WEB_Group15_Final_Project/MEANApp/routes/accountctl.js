var express = require('express');
var router = express.Router();

var user = require('../models/User.js');

//read
router.route('/').get(function (req, res) {
	user.find(function (err, users) {
    if (err) res.send(err);
        res.json(users);
    });
});

router.route('/:user_id').get(function (req, res) {
    user.findById(req.params.user_id, function (err, users) {
		if (err) res.send(err);
		res.json(users);
    });
});

router.route('/findname/:username').get(function (req, res) {
    user.find({name:req.params.username}, function (err, users) {
		if (err) res.send(err);
		res.json(users);
    });
});

// //create
// router.route('/').post(function (req, res) {
//     var u = new user();
//     u.name = req.body.name;
//     u.password = req.body.password;
// 	u.email = req.body.email;
//     u.save(function (err) {
//         if (err) res.send(err);
//         res.send({ message: 'Created !' })
//     });
// });

//update
router.route('/:user_id').post(function (req, res) {
	user.findById(req.params.user_id, function (err, users) {
		if (err) throw err;
		users.name = req.body.name;
		users.password = req.body.password;
		users.email = req.body.email;
		users.save(function (err) {
            if (err) 
                res.send(err);
            res.send({ Failed: false, data: users })
		});
	});
});

//delete
router.route('/:user_id').delete(function (req, res) {
    user.deleteOne({ _id: req.params.user_id }, function (err, users) {
        if (err) res.send(err);
        res.json({ Failed: false, message: 'Successfully deleted !' });
    })
});

// Return router
module.exports = router;
