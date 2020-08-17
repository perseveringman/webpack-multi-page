const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const QiniuPlugin = require('qiniu-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
const { define } = require('./config')('prod');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: [
        //   path.resolve(__dirname, '../src'),
        // ],
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 单位是 Byte，当文件小于 8KB 时作为 DataURL 处理
              outputPath: '/image/', // 图片文件输出的文件夹
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(define),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // new QiniuPlugin({
    //   ACCESS_KEY: 'xxx',
    //   SECRET_KEY: 'xxx',
    //   bucket: 'xxx',
    //   zone: 'Zone_z0',          //七牛zone，默认华东   华东:z0 华北:z1 华南:z2 北美:na0 新加坡:as0
    //   path: 'xxx'
    // }),
    new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin(['src/server', 'configs/router.config.js']),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        cache: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: {
      name: 'manifest',
    },
    moduleIds: 'hashed',
    splitChunks: {
      minSize: 30000,
      cacheGroups: {
        common: {
          test: /\.m?js$/,
          chunks: 'initial',
          name: 'common',
          filename: 'js/common.[contenthash:8].js',
          minSize: 0,
          minChunks: 2,
          priority: 1,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
