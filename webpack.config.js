// in webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main:  ['babel-polyfill', './main.js'],
    module: './module-1.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: { //裝入style-loader,css-loader兩個模組
    rules: [{
      test: /\.js$/, //在webpack執行前先babel-loader執行
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }]] //不要轉譯modules的語法否則會變成node版本是同步執行
        }
      }]
    }
      , {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }]
  },
  plugins: [ //這個函式會將打包前重覆參考的模組獨立出來打包 可以降低打包的時間以及避免模組重覆打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: 2
    }),
  ],
}
