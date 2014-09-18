/** @jsx React.DOM */

var React = require('react');
var _ = require('underscore');

var workoutDummyList = [
    {name: "Test data one", day: "15.9.2014", distance: "41", avgHr: "141"},
    {name: "Test data two", day: "15.10.2014", distance: "61", avgHr: "122"},
    {name: "Test data three", day: "15.10.2014", distance: "61", avgHr: "122"}
]

var Workout = React.createClass({
    displayName: "Workout",

    handleClick: function() {
        //TODO do something
    },
    
    render: function render() {
        return (
           <li className="workout" onClick={this.handleClick}>
               <h1>{this.props.key}</h1>
               <ul className="summary">
                <li>{this.props.day}</li> 
                <li>{this.props.distance} km </li>   
                <li>{this.props.avgHr} bpm </li>   
               </ul>
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
        var workoutSet = workoutDummyList;
        var self = this;
        if(this.props.filterText !== '') {
            workoutSet = _.filter(workoutSet, function(val) {
                return val.name.indexOf(self.props.filterText) !== -1;
            });
        }
        var workElems = _.map(workoutSet, function(workout) {
                return <Workout key={workout.name} day={workout.day} distance={workout.distance} avgHr={workout.avgHr}/>
            });

        return (
            <ul className="workouts">
                {workElems} 
            </ul>
        );
    }
});

module.exports = Navbar;