# react-quickstart

A quick and minimal React starter kit. Includes ES6, Sass, Gulp, and Webpack.

React is great! But setting up a ES6/JSX dev environment with Webpack and Gulp is not so great :confused:. 

Use this repo to quickly start writing beautiful, modular React code!

## Quick Start

    npm start

## Component Generation

To quickly create a React component:

    gulp component --name <name>

Add the `--full` flag to create a React component will life-cycle methods.

Components generated this way will automatically be created in `/src/app/components/`. 

If you want to tweak the component template, see the files in `/generator`. 

## Application Structure

```bash
$ tree src

├── src/                  # Main source folder
│   ├── app/              # React application files
│   │   ├── components/   # React components
│   │   ├── styles/       # Sass styles
│   │   └── index.jsx     # Main React app entry point
│   ├── dist/             # Static file bundles
│   └── index.html        # HTML entry point     
└──...                    # Configuration files
```

## Webpack

The `webpack.config.js` is already set up for you, but in case you were wondering about specific configuration details, here is a line by line explanation:

#### Devtool
```javascript
devtool: 'eval',
```
This config property allows you to choose a developer tool to enhance debugging. In this case, `eval` is selected, which is the most performant, but only maps to compiled source code per module. For more detvool options refer to thhe Webpack [docs](http://webpack.github.io/docs/configuration.html#devtool)

#### Debug (TODO)

#### Watch (TODO)

#### Output (TODO)

#### Loaders (TODO)

#### Resolve (TODO)

#### Plugins (TODO)






