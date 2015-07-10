# react-quickstart

A quick and minimal React starter kit. Includes ES6, Sass, Gulp, and Webpack.

React is great! But setting up a ES6/JSX dev environment with Webpack and GUlp is not so great :(

Use this repo to quickly jump into writing beautiful, modular React code!

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
