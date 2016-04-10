var path = require('path')
var webpack = require('webpack')
var bourbon = require('node-bourbon').includePaths

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        exclude: /(node_modules|public)/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass?includePaths[]=' + bourbon]
      }
    ]
  },
  externals: {
    lodash: '_',
    react: 'React',
    jquery: 'jQuery',
    superagent: 'superagent',
    'react-dom': 'ReactDOM',
    'underscore.string': 's',
    'react-bootstrap': 'ReactBootstrap',
    'js-cookie': 'Cookies'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      store: path.join(__dirname, 'app/store'),
      contrib: path.join(__dirname, 'app/contrib'),
      actions: path.join(__dirname, 'app/actions'),
      reducers: path.join(__dirname, 'app/reducers'),
      components: path.join(__dirname, 'app/components'),
      containers: path.join(__dirname, 'app/containers'),
      middleware: path.join(__dirname, 'app/middleware'),
      styles: path.join(__dirname, 'styles'),
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
