/** @jsx React.DOM */

var React = require('react');
var Navbar = require('../navbar/Navbar.jsx');
var Workouts = require('../workouts/Workouts.jsx');

var navbarContent = [
    {name: "Home", link: "/"},
    {name: "Summaries", link: "/summaries"},
    {name: "About", link: "/about"}
];

module.exports = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            filterText: ''
        };
    },

    handleFilter: function(filter) {
        this.setState({
            filterText: filter
        });
    },

    render: function render() {
        
        return (
            <div className="app">
                <Navbar content={navbarContent} filterText={this.state.filterText} onFilterChange={this.handleFilter}/>
                <Workouts filterText={this.state.filterText}/>
            </div>
        );
    }
});