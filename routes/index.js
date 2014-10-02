var express = require('express');
var router = express.Router();

var workoutDummyList = [
    {id: 1, name: "Test data one", day: "15.9.2014", distance: "41", avgHr: "141"},
    {id: 2, name: "Test data two", day: "15.10.2014", distance: "61", avgHr: "122"},
    {id: 3, name: "Test data three", day: "15.10.2014", distance: "62", avgHr: "123"},
    {id: 4, name: "Test data four", day: "15.11.2014", distance: "633", avgHr: "123"}
];

for(i = 5; i < 50; ++i) {
	var workout = {id: i, name: "Test data " + i, day: "15.9.2014", distance: i, avgHr: i*3 };
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
