const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { define } = require('./config')('test');

module.exports = merge(baseConfig, {
  devtool: "cheap-module-source-map",
  output: {
    publicPath: 'https://test.www.baidu.com/'
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
              // publicPath: 'https://www.baidu.com'
            }
          },
          'css-loader?modules',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: true,
              publicPath: 'https://www.baidu.com'
            }
          },
          'css-loader?modules',
          'postcss-loader',
          'less-loader',
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 单位是 Byte，当文件小于 8KB 时作为 DataURL 处理
              outputPath: 'image/',  // 图片文件输出的文件夹
              name: '[name].[hash:8].[ext]'
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(define),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        cache: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: {
			name: 'manifest'
    },
    moduleIds: 'hashed',
    splitChunks: {
      minSize: 30000,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
          name: 'vendors',
					filename: 'js/vendors.[contenthash:8].js',
					priority: 2,
          reuseExistingChunk: true,
          enforce: true,
				},
				common: {
					test: /\.m?js$/,
					chunks: 'initial',
					name: 'common',
					filename: 'js/common.[contenthash:8].js',
					minSize: 0,
					minChunks: 2,
					priority: 1,
					reuseExistingChunk: true
				}
			}
		}
  },
})
