var Auth = require('./controllers/auth');
var User = require('./models/user');

module.exports = function(app){
	// app.get('/', function(req, res, next){
	// 	res.send("HELLO HOMEPAGE");
	// });
	app.post('/signup', Auth.signup);
}