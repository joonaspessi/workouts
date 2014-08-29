/** @jsx React.DOM */

require.config({
    baseUrl: '/',
    paths: {
        react: 'lib/react',
        lodash: 'lib/lodash',
        page: 'lib/page'
    }
});

define([
    'page',
    'react',
    'build/Blank' // NOTE: All transformed JSX files live in build/ dir, not src/.
], function(page, React, Blank) {
    /**
        Add whatever routes you need.

        See Page.js readme for halp: http://visionmedia.github.io/page.js/
    */
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
    
});

