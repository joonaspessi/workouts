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
	app.setState({page: "workouts"});  
});

page('/summaries', function summaries() {
    app.setState({page: "summaries"});
});

page('/workout/:id', function workout(options) {
	if (options.param.id) {
		app.setState({page: "workout", id: options.param.id});
	} else {
		app.setState({page: "workouts"});
	}
});

page('*', function() {
	console.log('not found');
})

page(); // Start router and serve the URL the user has in their address bar.

