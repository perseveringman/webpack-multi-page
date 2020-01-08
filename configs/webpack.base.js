const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require("glob");
const htmlPluginArray= [];
function getEntry() {
  const entry = {};
  //读取src目录所有page入口
  glob.sync(path.resolve(__dirname, '../src/pages/**/entry.js'))
      .forEach(function (filePath) {
          var name = filePath.match(/\/pages\/(.+)\/entry.js/);
          name = name[1];
          entry[name] = filePath;
          console.log(filePath)
          htmlPluginArray.push(new HtmlWebpackPlugin({
            filename: './pages/' + name + '/index.html',
            template: path.resolve(__dirname, '../src/pages/' + name + '/index.ejs'),
            chunks: [name, 'common', 'vendors', 'manifest']
          }))
      });
    
  return entry;
};
module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js'
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
      { test: /\.ejs$/, loader: 'ejs-loader' },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      "src": path.resolve(__dirname, '../src'),
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat"
    }
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html', // 配置输出文件名和路径
    //   template: path.resolve(__dirname, '../src/index.html'), // 配置文件模板
    // }),
    ...htmlPluginArray
  ]
}