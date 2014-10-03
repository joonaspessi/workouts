var express = require('express');
var router = express.Router();
var moment = require('moment');


function getLastDays(dayCount) {
         var date = new Date();
         var days = [];
         for(var i = 0; i < dayCount; ++i) {
         	days.push(moment(date));
         	date.setDate(date.getDate() - 1);
         }
         return days;
}

var workoutDummyList = [];
var days = getLastDays(30);

for(i = 0; i < days.length; ++i) {
	var workout = {id: i, name: "Test data " + i, day: days[i].toJSON(), distance: i, avgHr: i*3 };
	workoutDummyList.push(workout);
}

router.get('/workout', function(req, res) {
	// Simulate delay
	//setTimeout(function(){res.json(workoutDummyList);}, 1000);
	res.json(workoutDummyList);
});
// Serve index.ejs from all routes to allow proper single-page app behaviour.
router.get('*', function(req, res) {
    res.render('index', { title: 'Welcome to My workouts' });
});

module.exports = router;
