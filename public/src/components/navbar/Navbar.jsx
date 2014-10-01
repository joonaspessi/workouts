/** @jsx React.DOM */

var React = require('react');
var addons = require('react-addons');
var _ = require('underscore');

var SearchBar = React.createClass({
    displayName: "SearchBar",

    handleChange: function() {
        var value = this.refs.filterTextInput.getDOMNode().value;
        this.props.onFilterChange(value);
    },

    render: function() {
        return (
            <form className="search-bar">
                <i className="fa fa-search"></i>
                <input
                    className="search"
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
            </form>
        );
    }
});

var NavbarLink = React.createClass({
    displayName: "NavbarLink",

    handleClick: function() {
        //Todo handle click
    },
    
    render: function render() {
        var classes = addons.classSet({
            selected: this.props.selected,
            "nav-item": true
        });
        var icon = "fa " + this.props.icon;
        return (
            <a href={this.props.link} className={classes} onClick={this.handleClick}> 
                <i className={icon}></i>
                {this.props.key} 
            </a>
        );
    }
});

var Navbar = React.createClass({
    displayName: "Navbar",

    render: function render() {
        var content = _.map(this.props.content, function(line) {
            return <NavbarLink link={line.link} key={line.name} icon={line.icon} selected={false} />
        });

        return (
            <ul className="navbar"> 
                {content}
                <SearchBar onFilterChange={this.props.onFilterChange}/>
            </ul>
        );
    }
});

module.exports = Navbar;