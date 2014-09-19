/** @jsx React.DOM */

var React = require('react');
var addons = require('react-addons');
var _ = require('underscore');

var workoutDummyList = [
    {name: "Test data one", day: "15.9.2014", distance: "41", avgHr: "141"},
    {name: "Test data two", day: "15.10.2014", distance: "61", avgHr: "122"},
    {name: "Test data three", day: "15.10.2014", distance: "62", avgHr: "123"}
];

var Workout = React.createClass({
    displayName: "Workout",

    handleClick: function() {
        //TODO do something
    },
    
    render: function render() {
        return (
           <li className="workout" onClick={this.handleClick}>
               <h1>{this.props.model.get('name')}</h1>
               <ul className="summary">
                <li>{this.props.model.get('day')}</li> 
                <li>{this.props.model.get('distance')} km </li>   
                <li>{this.props.model.get('avgHr')} bpm </li>   
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
        var ReactCSSTransitionGroup = addons.CSSTransitionGroup;
        var workoutSet = this.props.collection;
        var self = this;
        if(workoutSet && this.props.filterText !== '') {
            workoutSet.filter( function(workout) {
                return workout.get('name').indexOf(self.props.filterText) !== -1;
            });
        }

        if (workoutSet) {
            var workElems = workoutSet.map( function(workout) {
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