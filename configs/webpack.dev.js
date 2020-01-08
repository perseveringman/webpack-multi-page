const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { proxy, define } = require('./config')('dev');

const config = merge(baseConfig, {
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: [
        //   path.resolve(__dirname, './src'),
        // ],
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          'less-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|pdf)$/,
        use: ['file-loader']
      },
    ]
  },
  devServer: {
    port: '8008',
    hot: true,
    contentBase: path.resolve(__dirname, "../src"),
    proxy,
  },
  plugins: [
    new webpack.DefinePlugin(define),
    new webpack.HotModuleReplacementPlugin(),
  ]
})
module.exports = config;
