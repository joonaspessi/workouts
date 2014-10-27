/** @jsx React.DOM */

var React = require('react');
var addons = require('react-addons');
var _ = require('underscore');

// Model
var WorkoutModel = require('../workouts/WorkoutModel.js');
var Navbar = React.createClass({
    displayName: "WorkoutInfo",

    getInitialState: function() {
    	return {
    	};
    },

    onClick: function() {
        window.history.back()
    },

    render: function render() {
        return (
            <div className="workout-info-container">
                <div className="back-button" onClick={this.onClick}>
                    <i className="fa fa-arrow-circle-left fa-2x"></i>
                    <span>Go Back</span>
                </div>
                <div className="workout-info">
                    <h1>{this.props.model.get('name')}</h1>
                    <div className="distance">{this.props.model.get('distance')}</div>
                    <div className="avgHr">{this.props.model.get('average_heartrate')}</div>
                </div>
            </div>
        );
    }
});

module.exports = Navbar;