const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: './src/index',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],

  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loaders: ['file?name=images/[sha512:hash:base64:7].[ext]'],
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /^((?!\.module).)*\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        ),
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' // eslint-disable-line max-len
        ),
        exclude: /node_modules/,
      },
    ],
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 version', 'IE 10'],
    }),
    nested,
  ],
};
