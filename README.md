# react-quickstart

A quick and minimal React starter kit. Includes ES6, Sass, Gulp, and Webpack.

React is great! But setting up a ES6/JSX dev environment with Webpack and GUlp is not so great :(

Use this repo to quickly jump into writing beautiful, modular React code!

Run `npm start` to get started.

## Component Generation

Use `gulp component --name <name>` to quickly create a React Component.

Add the `--full` flag to create a React Component will life-cycle methods.

## Application Structure

```bash
$ tree src

├── src/                  # Main source folder
│   ├── app/              # React application files
│   │   ├── components/   # React components
│   │   ├── styles/       # Sass styles
│   │   └── index.jsx     # Main React app entry point
│   └── index.html        # HTML entry point     
└──...                    # Configuration files
```
