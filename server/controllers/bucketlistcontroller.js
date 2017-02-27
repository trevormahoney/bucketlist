const BucketList = require('../models/bucketlist')

exports.addBucketList = function(req, res, next){
	//For postman use
	//var title - req.body.title;
	var title = req.body.props.title;
	var topic = req.body.props.topic;
	var url = req.body.props.url;
	var content = req.body.props.content;
	var specificUser = req.user._id;

	var bucketList = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err){
		if(err) { return next(err); }
		res.json(bucketList);
	});
}
exports.fetchBucketLists = function(req,res) {
	var specificUser = req.user._id;
	BucketList.find({specificUser: specificUser})
	.then(
		function fetchSuccess(data) {
			res.json(data);
		},
		function fetchError(err) {
			res.send(500, err.message);
		}
	);
}