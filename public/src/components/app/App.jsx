/** @jsx React.DOM */

var React = require('react');
var Navbar = require('../navbar/Navbar.jsx');
var Workouts = require('../workouts/Workouts.jsx');

module.exports = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {};
    },
    /** Renders in React's virtual DOM. */
    render: function render() {
        
        return (
            <div className="app">
                < Navbar />
                < Workouts />
            </div>
        );
    }
});