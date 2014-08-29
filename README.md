# Welcome to ReactExpress!

This is a template for a React / Express.js project. Includes several utility libraries like Lo-Dash and Require.js to get started fast.

# Usage
- Develop your LESS and JSX in `public/src/`.
- Keep your fingers away from `public/build/`.

## Structure
- `bin/` - Express.js scripts.
- `public/` - Public files (static assets).
- `public/build/` - Compiled LESS (CSS) and transformed JSX (JS) files. 
- `public/lib/` - External JavaScript libraries.
- `public/src/` - LESS and JSX files.
- `routes/` - Your Express.js routes.
- `views/` - Your Express.js views.

## External JavaScript libraries
- `public/lib/react.js` - React (with addons): http://facebook.github.io/react/index.html 
- `public/lib/page.js` - Page.js, a lightweight router: http://visionmedia.github.io/page.js/
- `public/lib/lodash.js` - Lo-Dash, a utility lib: http://lodash.com/
- `public/lib/require.js` - Require.js, a module loader: http://requirejs.org/

## Grunt tasks
- `grunt less` - Run the LESS compiler once.
- `grunt react` - Run the JSX transformer once.
- `grunt watch` - Watch for LESS and JSX changes.

## npm scripts
- `npm start` - Start Express.js server

## Procfile
A Procfile is included to easily run the project e.g. in Heroku. See Heroku Dev Center for detailed instructions if you get in trouble.

## Future improvements & TODOs
- Add production build task (e.g. minify, concatenate)

## License
The MIT License (MIT)

Copyright (c) 2014 Jukka Tupamäki (@tukkajukka), Lemanse Oy
