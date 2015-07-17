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

## Webpack

The `webpack.config.js` is already set up for you, but in case you were wondering about specific configuration details, here is a line by line explanation. Checkout out the official Webpack [docs](http://webpack.github.io/docs/configuration.html#devtool) for more information about configuration properties.

#### Devtool
```javascript
devtool: 'eval',
```
This config property allows you to choose a developer tool to enhance debugging. In this case, `eval` is selected, which is the most performant, but it only maps to compiled source code per module. 

#### Debug (TODO)
```javascript
debug: 'true',
```

#### Watch (TODO)
```javascript
watch: 'true',
```

#### Output (TODO)
```javascript
output: { filename: 'bundle.js' },
```
#### Loaders (TODO)

##### JS and JSX
```javascript
{
  test: /\.jsx?$/,
  exclude: /(node_modules)/,
  loaders: [
    'jsx-loader?insertPragma=React.DOM&harmony&harmony', 
    'babel?stage=0&optional[]=runtime&loose=all&cacheDirectory'
  ]
},
```
##### SCSS
```javascript
{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract(
    'css?sourceMap!' +
    'sass?sourceMap'
  )
},
```
##### Static Assets
```javascript
{
  test: /\.(png|jpg|eot|woff|woff2|ttf|svg)$/, 
  loader: 'url-loader?limit=8192'
}
```

#### Resolve (TODO)

```javascript
resolve: { extensions: ['', '.js', '.jsx'] },
```

#### Plugins (TODO)

```javascript
plugins: [ new ExtractTextPlugin('styles.css') ]
```




