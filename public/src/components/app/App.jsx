/** @jsx React.DOM */

var React = require('react');
var Navbar = require('../navbar/Navbar.jsx');
var Workouts = require('../workouts/Workouts.jsx');

// Models
var WorkoutCollection = require('../workouts/WorkoutCollection.js');
var navbarContent = [
    {name: "Home", link: "/"},
    {name: "Summaries", link: "/summaries"},
    {name: "About", link: "/about"}
];

module.exports = React.createClass({
    displayName: "App",


    getInitialState: function getInitialState() {
        var collection = new WorkoutCollection();
        var self = this;
        var options = {
            success: function() {
                console.log('success', collection.toArray());
                self.setState({workouts: collection});
            },
            error: function() {
                console.error('error: cannot fetch workouts');
            }
        }
        collection.fetch(options);

        return {
            page: "workouts",
            filterText: "",
            id: null,
            workouts: null
        };
    },

    handleFilter: function(filter) {
        this.setState({
            filterText: filter
        });
    },

    render: function render() {
        var options = {
            success: function() {console.log('success')},
            error: function() {console.log('error')}
        }
        var content = this.getContent();
        return (
            <div className="app">
                <Navbar content={navbarContent} 
                        filterText={this.state.filterText} 
                        onFilterChange={this.handleFilter}/>
                        
                <Workouts filterText={this.state.filterText} 
                          collection={this.state.workouts}/>
            </div>
        );
    },

    getContent: function getContent() {
        if (this.state.page === "workouts") {
            return <Workouts filterText={this.state.filterText}/>;
        } else if (this.state.page === "summaries") {
            return <Workouts filterText={this.state.filterText}/>;
        } else if (this.state.page === "workout") {
            if (this.state.null) {
                return <Workouts filterText={this.state.filterText}/>
            }
        }
    }
});