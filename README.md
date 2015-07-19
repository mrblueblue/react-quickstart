# React Quickstart
[![Build Status](https://travis-ci.org/mrblueblue/react-quickstart.svg?branch=master)](https://travis-ci.org/mrblueblue/react-quickstart) [![Dependency Status](https://david-dm.org/mrblueblue/react-quickstart.svg)](https://david-dm.org/mrblueblue/react-quickstart) [![devDependency Status](https://david-dm.org/mrblueblue/react-quickstart/dev-status.svg)](https://david-dm.org/mrblueblue/react-quickstart#info=devDependencies)

> A minimalist React starter. 

> Includes [ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/), [Babel](http://babeljs.io/), [Sass](http://sass-lang.com/), [Gulp](http://gulpjs.com/), [Webpack](http://webpack.github.io/), [Mocha](http://mochajs.org/)/[Chai](http://chaijs.com/) and [BrowserSync](http://www.browsersync.io/). 

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

## Configs

[Here](CONFIGURATION.md) is a breakdown of the Webpack and Gulp configurations.

## License

The MIT License © Jonathan Huang
