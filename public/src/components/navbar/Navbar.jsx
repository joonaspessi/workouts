/** @jsx React.DOM */

var React = require('react');

var NavbarLink = React.createClass({
    displayName: "NavbarLink",
    
    render: function render() {
        return (
           <a href={this.props.link}> {this.props.name} </a>
        );
    }
});

var Navbar = React.createClass({
    displayName: "Navbar",

    getInitialState: function getInitialState() {
        return {};
    },
    /** Renders in React's virtual DOM. */
    render: function render() {
        
        return (
            <ul className="navbar"> 
                <NavbarLink link="/" name="Home" />
                <NavbarLink link="/" name="Summaries" />
                <NavbarLink link="/" name="About" />
            </ul>
        );
    }
});

module.exports = Navbar;