var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './docs/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [path.join(__dirname, 'docs'), path.join(__dirname, 'components')],
        exclude: [path.join(__dirname, 'docs', 'examples')]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /Examples.js/,
        loaders: ['transform?brfs', 'babel']
      },
    ]
  },
  postcss: function () {
    return [
      autoprefixer,
      cssnext
    ];
  }
};
