# React Quickstart
[![Build Status](https://travis-ci.org/mrblueblue/react-quickstart.svg?branch=master)](https://travis-ci.org/mrblueblue/react-quickstart) [![Dependency Status](https://david-dm.org/mrblueblue/react-quickstart.svg)](https://david-dm.org/mrblueblue/react-quickstart) [![devDependency Status](https://david-dm.org/mrblueblue/react-quickstart/dev-status.svg)](https://david-dm.org/mrblueblue/react-quickstart#info=devDependencies)

A minimalist React starter. 

## Features

&nbsp; &nbsp; ✓ Language - [ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)<br>
&nbsp; &nbsp; ✓ Transpiler - [Babel](http://babeljs.io/)<br>
&nbsp; &nbsp; ✓ Styling - [Sass](http://sass-lang.com/)<br>
&nbsp; &nbsp; ✓ Task Runner - [Gulp](http://gulpjs.com/)<br>
&nbsp; &nbsp; ✓ Bundling - [Webpack](http://webpack.github.io/)<br>
&nbsp; &nbsp; ✓ Testing - [Mocha](http://mochajs.org/)/[Chai](http://chaijs.com/)<br>
&nbsp; &nbsp; ✓ Development - [BrowserSync](http://www.browsersync.io/)<br>

## Getting Started

    npm start

## Application Structure

```bash
├── src/                  # Main source folder
│   ├── app/              # React application files
│   │   ├── components/   # React components
│   │   ├── styles/       # Sass styles
│   │   └── index.jsx     # Main React app entry point
│   ├── dist/             # Static file bundles
│   └── index.html        # HTML entry point     
└──...                    # Configuration files
```

## Component Generation

    gulp component --name <name>

Components generated this way will automatically be created in `/src/app/components/`. 

Add the `--full` flag to create a React component with life-cycle methods.

## Docs

* [React and ES6](./docs/REACT-ES6.md)
* [Webpack Config](./docs/WEBPACK.md)
* [Component Generator](./docs/GENERATOR.md)
* [FAQ](./docs/FAQ.md)

## License

The MIT License © Jonathan Huang
