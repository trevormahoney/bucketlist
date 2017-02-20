var User = require('../models/user');

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
		res.json({success: true}); //make sure you have the {}
	});
}

