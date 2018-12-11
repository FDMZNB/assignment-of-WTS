var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	content: String,
	author: String,
	created: String,
	post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

// mongoose.model('Comment', CommentSchema);
module.exports = mongoose.model('Comment', CommentSchema);
