/** @jsx React.DOM */

var React = require('react'); 
var page = require('page');
var Blank = require('./Blank.jsx');
var Navbar = require('./components/navbar/Navbar.jsx');
var Workouts = require('./components/workouts/workouts.jsx');
var App = require('./components/app/App.jsx');

var app = React.renderComponent(
        <App />,
        document.body
	);

page('/', function index() {
    
});

page('/summaries', function example() {
    React.renderComponent(
        <Navbar />,
        document.body
    );
});

page(); // Start router and serve the URL the user has in their address bar.

