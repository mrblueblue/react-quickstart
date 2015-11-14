# React Quickstart
[![Build Status](https://travis-ci.org/mrblueblue/react-quickstart.svg?branch=master)](https://travis-ci.org/mrblueblue/react-quickstart) [![Dependency Status](https://david-dm.org/mrblueblue/react-quickstart.svg)](https://david-dm.org/mrblueblue/react-quickstart) [![devDependency Status](https://david-dm.org/mrblueblue/react-quickstart/dev-status.svg)](https://david-dm.org/mrblueblue/react-quickstart#info=devDependencies)

A minimalist React starter. 

## Features

&nbsp; &nbsp; ✓ Language - [ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)<br>
&nbsp; &nbsp; ✓ Styling - [Sass](http://sass-lang.com/)<br>
&nbsp; &nbsp; ✓ Task Runner - [Gulp](http://gulpjs.com/)<br>
&nbsp; &nbsp; ✓ Bundling - [Webpack](http://webpack.github.io/)<br>
&nbsp; &nbsp; ✓ Testing - [Mocha](http://mochajs.org/)/[Chai](http://chaijs.com/)<br>

## Getting Started

    npm start

## Application Structure

```bash
├── dist/                 # Distribution bundle
├── src/                  # Main source folder
│   ├── components/       # React components
│   ├── styles/           # Sass styles
│   ├── index.js/         # Main React app entry point
│   └── index.html        # HTML entry point
├──devServer.js           # Webpack server with hot reload
└──...                    # Configuration files
```

## Component Generation

    gulp component --name <name>

Components generated this way will automatically be created in `/src/app/components/`. 

Add the `--full` flag to create a React component with lifecycle methods.

## License

The MIT License © Jonathan Huang
