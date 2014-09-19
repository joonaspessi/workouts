var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

var WorkoutModel = Backbone.Model.extend({
	defaults: {
		name: '',
		avgHr: 0,
		distance: 0
	}
});

module.exports = WorkoutModel;