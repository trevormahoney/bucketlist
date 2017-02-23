var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var mongoose = require('mongoose'); //mongoose is a library that allows you to communicate with a database more easily also called a URM
var cors = require('cors');

//DB connection
mongoose.connect('mongodb://localhost:bucket/bucket');

//Middleware
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//Server
var port = process.env.PORT || 3000;
var server = http.createServer(app);

server.listen(port);
	console.log('Server is listening on ' + port);
