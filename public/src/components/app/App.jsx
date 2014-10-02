/** @jsx React.DOM */

var React = require('react');
var Navbar = require('../navbar/Navbar.jsx');

// Views
var Workouts = require('../workouts/Workouts.jsx');
var WorkoutInfo = require('../workoutInfo/workoutInfo.jsx');

// Models
var WorkoutCollection = require('../workouts/WorkoutCollection.js');

var navbarContent = [
    {name: "Home", link: "/", icon:"fa-home"},
    {name: "Summaries", link: "/summaries", icon:"fa-signal"},
    {name: "About", link: "/about", icon:"fa-question-circle"}
];

module.exports = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        this.collection = new WorkoutCollection();
        var self = this;
        var options = {
            success: function() {
                self.setState({workouts: self.collection});
            },
            error: function() {
                console.error('error: cannot fetch workouts');
            }
        }
        this.collection.fetch(options);

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
        var content = this.getContent();
        return (
            <div className="app">
                <Navbar content={navbarContent} 
                        filterText={this.state.filterText} 
                        onFilterChange={this.handleFilter}/>
                {content}
            </div>
        );
    },

    getContent: function getContent() {
        if (!this.state.workouts) {
            // TODO implement as own generic loading component
            return <div className="loading-splash"><i className="fa fa-spinner fa-spin fa-5x"></i></div>;
        }
        else if (this.state.page === "workouts") {
            return <Workouts filterText={this.state.filterText} collection={this.state.workouts}/>;
        } else if (this.state.page === "summaries") {
            return <Workouts filterText={this.state.filterText} collection={this.state.workouts}/>;
        } else if (this.state.page === "workout") {        
            var model = this.collection.get(this.state.id);  
            return <WorkoutInfo model={this.collection.get(this.state.id)}/>
        }
    }
});