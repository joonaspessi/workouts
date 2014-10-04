var express = require('express');
var router = express.Router();
var moment = require('moment');


function getLastDays(dayCount) {
         var date = new Date();
         var workouts = [];
         for(var i = 0; i < dayCount; ++i) {
         	workouts.push({id: i, name: "Test data " + i, day: moment(date).toJSON(), distance: i, avgHr: i*3 });
         	date.setDate(date.getDate() - 1);
         }
         return workouts;
}

router.get('/workout', function(req, res) {
	// Simulate delay
	var dayCount = 30; // Default
	if (req.query.days) {
		dayCount = req.query.days;
	}

	var workouts = getLastDays(dayCount);
	//setTimeout(function(){res.json(workoutDummyList);}, 1000);
	res.json(workouts);
});
// Serve index.ejs from all routes to allow proper single-page app behaviour.
router.get('*', function(req, res) {
    res.render('index', { title: 'Welcome to My workouts' });
});

module.exports = router;
