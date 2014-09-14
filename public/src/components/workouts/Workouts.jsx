/** @jsx React.DOM */

var React = require('react');

var Workout = React.createClass({
    displayName: "Workout",
    
    render: function render() {
        return (
           <li className="workout">
           <h1>{this.props.name} </h1>
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
                <Workout name="Nokia" />
                <Workout name="Nokia" />
                <Workout name="Nokia" />
                <Workout name="Nokia" />
                <Workout name="Nokia" />
            </ul>
        );
    }
});

module.exports = Navbar;