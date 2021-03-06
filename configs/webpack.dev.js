const webpack = require('webpack');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const baseConfig = require('./webpack.base');
const { proxy, define } = require('./config')('dev');
const routes = require('./router.config');

const config = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: [
        //   path.resolve(__dirname, './src'),
        // ],
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
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
        ],
      },
      {
        test: /\.less$/,
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
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     'postcss-loader',
      //     'sass-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: '[name]_[local]_[hash:base64]',
      //         sourceMap: true
      //       }
      //     },
      //   ],
      // },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: '8008',
    hot: true,
    // contentBase: path.resolve(__dirname, "../dist"),
    proxy,
    historyApiFallback: {
      rewrites: [
        {
          from: /./,
          to: function to(context) {
            const currentPath = context.parsedUrl.pathname;
            const currentRoute = routes.find(route => new RegExp(route.path).test(currentPath));
            // console.log(currentRoute, context.parsedUrl.pathname)
            if (/hot-update.json/.test(currentPath)) return currentPath; // 因为会出现hot-update.json 待研究
            return currentRoute ? currentRoute.component : '/pages/Dev404/index.html'; // 路由地图
          },
        },
        // { from: /./, to: '/pages/Dev404/index.html' } // 路由地图
      ],
    },
  },
  plugins: [
    new webpack.DefinePlugin(define),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8008' }),
  ],
});
module.exports = config;
