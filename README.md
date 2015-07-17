# react-quickstart

A quick and minimal React starter kit. Includes ES6, Sass, Gulp, and Webpack.

React is great! But setting up a ES6/JSX dev environment with Webpack and Gulp is not so great :confused:. 

Use this repo to quickly start writing beautiful, modular React code!

## Quick Start

    npm start


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


## Component Generation

To quickly create a React component:

    gulp component --name <name>

Add the `--full` flag to create a React component will life-cycle methods.

Components generated this way will automatically be created in `/src/app/components/`. 

If you want to tweak the component template, see the files in `/generator`. 

#### Basic Component

```javascript
export class Example extends.React.Component {

  static propTypes = {
    // initialCount: React.PropTypes.number.isRequired
  }

  render(){
    <div>
      <p> I am the Example Component</p>
    <div>
  }
}
```

#### Full Lifeycle Component
```javascript
export class Example extends.React.Component {

  static propTypes = {
    // initialCount: React.PropTypes.number.isRequired
  }

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    console.log('Example will mount!');
  }

  componentDidMount(){
    console.log('Example has mounted');
  }

  render(){
    <div>
      <p> I am the Example Component</p>
    <div>
  }

  componentWillUnmount(){
    console.log('Example has unmounted');
  }
};
```
## Configuration Info

[Here](CONFIGURATION.md) is a breakdown of the Webpack and Gulp configurations.

## ES6 + React (Todo)
