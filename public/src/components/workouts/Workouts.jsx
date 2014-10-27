/** @jsx React.DOM */

var React = require('react');
var addons = require('react-addons');
var _ = require('underscore');
var moment = require('moment');

var Workout = React.createClass({
    displayName: "Workout",

    render: function render() {
        var url = "workout/" + this.props.model.get('id');
        return (
            <li className="workout">
                <a href={url}>
                <ul className="summary">
                    <li>{this.props.model.get('name')}</li>
                    <li>{this.props.model.get('distance')/1000} km</li>
                    <li>{this.props.model.get('average_heartrate')} bpm</li>
                </ul>
                </a>
            </li>
        );
    }
});

var Navbar = React.createClass({
    displayName: "Workouts",

    getInitialState: function getInitialState() {
        return {};
    },
    /** Renders in React's virtual DOM. */
    render: function render() {
        var ReactCSSTransitionGroup = addons.CSSTransitionGroup();
        var workoutSet = this.props.collection;

        var self = this;
        if(workoutSet && this.props.filterText !== '') {
            var filterText = self.props.filterText.toLowerCase();
            workoutSet = workoutSet.filter( function(workout) {
                var workoutName = workout.get('name').toLowerCase();
                return workoutName.indexOf(filterText) !== -1;
            });
        }

        if (workoutSet) {
            var workElems = workoutSet.map( function(workout) {
                    //Todo create month and week summary separators
                    return <Workout key={workout.get('id')} model={workout}/>
                });
        }

        return (
            <ul className="workouts">
                    {workElems}
            </ul>
        );
    }
});

module.exports = Navbar;