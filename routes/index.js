var express = require('express');
var router = express.Router();
var moment = require('moment');


function getDaysInMonth(month, year, day) {
         // Since no month has fewer than 28 days
         var date = new Date(year, month, day);
         var days = [];
         while (date.getMonth() === month) {
            days.push(moment(new Date(date)));
            date.setDate(date.getDate() + 1);
         }
         return days;
}

var workoutDummyList = [];
var days = getDaysInMonth(moment().month(), moment().year(), moment().day());

for(i = 0; i < days.length; ++i) {
	var workout = {id: i, name: "Test data " + i, day: days[i].format('DD-MM-YYYY'), distance: i, avgHr: i*3 };
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
