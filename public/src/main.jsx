/** @jsx React.DOM */

var React = require('react'); 
var page = require('page');
var Blank = require('./Blank.jsx');

page('/', function index() {
    React.renderComponent(
        <Blank />, 
        document.body
    );
});

page('/example', function example() {
    React.renderComponent(
        <Blank text={"Hello from example route!"} isExample={true} />, 
        document.body
    );
});

page(); // Start router and serve the URL the user has in their address bar.

