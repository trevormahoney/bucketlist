var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function createUserToken(user){
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function(req, res, next){
	
	var email = req.body.email;
	var password = req.body.password;
	
	if( !email || !password){
		return res.status(418).send({error: 'You must provide email and password.'})
	}
	User.findOne({ email: email }, function(err, existingUser){
		if(err) {
			return next(err);
		}//handle search error
		if(existingUser){
			return res.status(418).send(err)
			// return res.status(418).send("Email is in use");
		}// Handles existing users
	});
	
	var user = new User ({
		email: email,
		password: password
	});
	//To save the record to the DB.
	user.save(function(err){
		if(err) { return next(err); }
		//Respond to requrest indicating the user was created
		// res.json(user);
		res.json({ token: createUserToken(user)}); //make sure you have the {}
	});
}

exports.signin = function(req, res, next){
	//User has already had their email and pw auth'd
	//we just need to five them a token
	res.send({ token: createUserToken(req.user) });
}