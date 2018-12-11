var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String,
	postcontent: String,
    author: String,
    created: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    upvotes: {type: Number, default: 0},
});

  
module.exports = mongoose.model('Post', PostSchema);


