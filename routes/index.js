var express = require('express');
var router = express.Router();
var moment = require('moment');
var httpProxy = require('http-proxy');
var url = require('url');
var https = require('https');
var queryString = require('querystring');

var stravaAccessToken = process.env["ACCESS_TOKEN"];

function getLastDays(dayCount) {
         var date = new Date();
         var workouts = [];
         for(var i = 0; i < dayCount; ++i) {
         	workouts.push({id: i, name: "Test data " + i, day: moment(date).toJSON(), distance: i, avgHr: i*3 });
         	date.setDate(date.getDate() - 1);
         }
         return workouts;
}

var stravaProxy = httpProxy.createProxyServer({
	target: 'https://www.strava.com/api/v3',
	agent: https.globalAgent,
	headers: {
    	host: 'strava.com'
  	}
});

router.get('/activities', function(req, res) {
	var query = null;
	if (req.url.indexOf('?') === -1) {
		query = '?';
	} else {
		query = '&';
	}
	var params = {"access_token": stravaAccessToken};
	req.url = [
		req.url,
		query,
		queryString.stringify(params)
	].join('');

	stravaProxy.web(req, res);
});

// Serve index.ejs from all routes to allow proper single-page app behaviour.
router.get('*', function(req, res) {
    res.render('index', { title: 'Welcome to My workouts' });
});

module.exports = router;
