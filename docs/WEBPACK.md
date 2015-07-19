## Webpack

The `webpack.config.js` is already set up for you, but in case you were wondering about specific configuration details, here is a line by line explanation. Checkout out the official Webpack [docs](http://webpack.github.io/docs/configuration.html#devtool) for more information about configuration properties.

#### Devtool
```javascript
devtool: 'eval',
```
This config property allows you to choose a developer tool to enhance debugging. In this case, `eval` is selected, which is the most performant, but it only maps to compiled source code per module. 

#### Debug
```javascript
debug: 'true',
```
Here, loaders are set to debug mode. (Which I guess makes errors explicit and verbose).

#### Watch
```javascript
watch: 'true',
```
By setting `watch` to true, webpack will rebuild the bundle on any changes.

#### Output
```javascript
output: { filename: 'bundle.js' },
```
`bundle.js` is the name our output bundle. We could also define a `path` property here, but this is actually defined in the `gulpfile.js`.

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
The JSX Loader has the harmony flag and the React.DOM pragma is automatically inserted in the file for processing.

The Babel Loader has these flags set:

1. `stage 0`
2. `runtime`
3. `loose=all`
4. `cacheDirector`


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
The `extract-text-webpack-plugin` allows us bundle css and scss files by using the `require` syntax in the entry file.

##### Static Assets
```javascript
{
  test: /\.(png|jpg|eot|woff|woff2|ttf|svg)$/, 
  loader: 'url-loader?limit=8192'
}
```
Image files are loaded using the URL Loader. This allows use to require an image inside a tag like so `require('./GitHub-Mark-Light-32px.png')`

#### Resolve
```javascript
resolve: { extensions: ['', '.js', '.jsx'] },
```
Lists the extensions that are used to resolve modules. In this case, a file like `App.jsx` can be imported as `import App from 'App'`.

#### Plugins

```javascript
plugins: [ new ExtractTextPlugin('styles.css') ]
```
Move every `require("style.css")` in the entry file into a separate css output file. As a result, styles are no longer inlined into the javascript, but instead are separatde in a css bundle file  called styles.css. 
