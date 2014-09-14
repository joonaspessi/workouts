/** @jsx React.DOM */

var React = require('react');

var Workout = React.createClass({
    displayName: "Workout",
    
    render: function render() {
        return (
           <li className="workout">
               <h1>{this.props.name}</h1>
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
        
        return (
            <ul className="workouts"> 
                <Workout name="Takakalliot" day="14.9.2014" distance="40" avgHr="155" /> 
                <Workout name="Nokia" day="15.9.2014" distance="40" avgHr="141"/> 
                <Workout name="Nokia" day="15.9.2014" distance="40" avgHr="142"/> 
                <Workout name="Nokia" day="15.9.2014" distance="40" avgHr="143"/> 
                <Workout name="Nokia" day="15.9.2014" distance="40" avgHr="144"/> 
                <Workout name="Nokia" day="15.9.2014" distance="40" avgHr="145"/> 
                <Workout name="Nokia" day="15.9.2014" distance="40" avgHr="146"/> 
            </ul>
        );
    }
});

module.exports = Navbar;