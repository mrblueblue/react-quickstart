# React Quickstart

> A quick and minimal React starter kit that includes ES6+, Babel, Sass, Gulp, Webpack, and BrowserSync. 

## Quick Start

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

To quickly create a React component:

    gulp component --name <name>

Add the `--full` flag to create a React component with life-cycle methods.

Components generated this way will automatically be created in `/src/app/components/`. 

If you want to tweak the component template, see the files in `/generator`. 

## Configs

[Here](CONFIGURATION.md) is a breakdown of the Webpack and Gulp configurations.

## License

The MIT License © Jonathan Huang
