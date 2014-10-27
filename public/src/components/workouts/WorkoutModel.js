var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var WorkoutModel = Backbone.Model.extend({
	defaults: {
		name: '',
		"average_heartrate": "-",
		distance: 0
	},

	urlRoot: '/activities'
});

module.exports = WorkoutModel;