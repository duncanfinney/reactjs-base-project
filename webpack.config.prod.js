var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');


module.exports = {
  devtool: 'source-map',
  entry: [
    './docs/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.DefinePlugin({
    //  'process.env': {
    //    'NODE_ENV': JSON.stringify('production')
    //  }
    //}),
    //new webpack.optimize.UglifyJsPlugin({
    //  compressor: {
    //    warnings: false
    //  }
    //})
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
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer,
      cssnext
    ];
  }
};
