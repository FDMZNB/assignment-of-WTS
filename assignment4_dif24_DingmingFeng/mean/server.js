// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const port = process.env.PORT || 8090;

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/apipost'));
app.use('/api', require('./routes/apiget'));
app.use('/api', require('./routes/apidelete'));
app.use('/api', require('./routes/apiput'));

// Start server
app.listen(port);
console.log('REST API is runnning at ' + port);
