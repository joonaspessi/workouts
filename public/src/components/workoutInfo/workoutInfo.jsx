/** @jsx React.DOM */

var React = require('react');
var addons = require('react-addons');
var _ = require('underscore');

// Model
var WorkoutModel = require('../workouts/WorkoutModel.js');
var Navbar = React.createClass({
    displayName: "WorkoutInfo",

    getInitialState: function() {
    	var workoutModel = new WorkoutModel();
    	workoutModel.fetch();
    	return {
    		modelReady: false
    	}
    },

    render: function render() {

    	if (!this.state.modelReady) {
    		return <div> Loading </div>;
    	}
        return (
            <div className="workout-info">
                hello
            </div>
        );
    }
});

module.exports = Navbar;