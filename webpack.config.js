const path = require('path');
const NodemonPlugin = require( 'nodemon-webpack-plugin' )
var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  node: {
    fs: "empty",
    net: 'empty',
 },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new NodemonPlugin(),
  ]
};