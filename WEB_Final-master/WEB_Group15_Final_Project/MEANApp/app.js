var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// connect to MongoDB
mongoose.connect('mongodb://localhost/user')
.then(() =>  console.log('connection succesful'))
 .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.disable('view cache');

//set all the path
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/accountctl', require('./routes/accountctl'));
app.use('/addpost', require('./routes/addpost'));
app.use('/data', require('./routes/data'));
app.use('/viewpost', require('./routes/viewpost'));
app.use('/addcomment', require('./routes/addcomment'));
app.use('/viewcomment', require('./routes/viewpost'));
app.use('/users',require('./routes/users'));
app.use('/posts',require('./routes/postinfo'));
app.use('/edit_user', require('./routes/edit_user'));
app.use('/delete_post', require('./routes/delete_post'));





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
