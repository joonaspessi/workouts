/** @jsx React.DOM */

define([
    'react'
], function BlankModule(React) {
    var Blank = React.createClass({
        displayName: "Blank",
    
        getInitialState: function getInitialState() {
            return {};
        },
        
        /** Renders in React's virtual DOM. */
        render: function render() {
            var cx = React.addons.classSet;
            var classes = cx({
                'blank': true,
                'example': this.props.isExample
            });

            return (
                <div className={classes}>
                    { this.props.text || "Welcome to ReactExpress!" }<br />
                    <a href="/">Index route</a> | <a href="/example">Example route</a>
                </div>
            );
        },
    
        /**
            If direct DOM access is needed, do it in this method.
            This is executed immediately after rendering is finished.
        */
        componentDidMount: function componentDidMount(component) {
        },
    
        /**
            If you need to e.g. remove event listeners that were
            set in componentDidMount(), do that here.
        */
        componentWillUnmount: function componentWillUnmount(component) {
        }

        /**
            See API docs: http://facebook.github.io/react/docs/getting-started.html
        */
    });

    return Blank;
});
