var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var WorkoutModel = require('../workouts/WorkoutModel.js');



var WorkoutCollection = Backbone.Collection.extend({
	model: WorkoutModel,

	url: '/workout'
});

module.exports = WorkoutCollection;