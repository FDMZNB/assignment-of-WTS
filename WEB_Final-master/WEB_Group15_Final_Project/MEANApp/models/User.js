var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {type: String, lowercase: true, unique: true},
  password: String,
  email: {type: String, unique: true},
  userrole: {type: String, default: 'User'},
  numcomments: {type: Number, default: 0},
  numposts: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  ban_flag: {type: Boolean, default: false},
});

// UserSchema.methods.addpost = function(cb) {
//   this.numposts += 1;
//   this.save(cb);
// };
// UserSchema.methods.addcomment = function(cb) {
//   this.numcomments += 1;
//   this.save(cb);
// };



module.exports = mongoose.model('User', UserSchema);

