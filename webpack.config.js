var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {

  devtool: 'eval',
  debug: true,
  watch: true,

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [

      /* ES6 + JSX */
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'jsx-loader?insertPragma=React.DOM&harmony&harmony', 
          'babel?stage=0&optional[]=runtime&loose=all&cacheDirectory'
        ]
      },

      /* CSS + SCSS */
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      },

      /* Static Assets */
      {
        test: /\.(png|jpg|eot|woff|woff2|ttf|svg)$/, 
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/app/components')
    }
  },

  plugins: [
    /* Produce CSS */
    new ExtractTextPlugin('styles.css'),
  ]
}


module.exports = config;
