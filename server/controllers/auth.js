var User = require('../models/user');

exports.signup = function(req, res, next){
	//1
	var email = req.body.email;
	var password = req.body.password;
	//2
	User.findOne({ email: email }, function(err, existingUser){
		if(err) {
			return next(err);
		}//handle search error
		if(existingUser){
			return res.status(418).send(err)
			// return res.status(418).send("Email is in use");
		}// Handles existing users
	});
	//3
	var user = new User ({
		email: email,
		password: password
	});
	//To save the record to the DB.
	user.save(function(err){
		if(err) { return next(err); }
		//4 Respond to requrest indicating the user was created
		res.json(user);
	});
}

// exports.signup = function(req, res, next){
// 	//Test
// 	res.send("authorization is happening");
// 	console.log(req.body);
// }