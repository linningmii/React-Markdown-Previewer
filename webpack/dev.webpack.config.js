const webpack = require('webpack'),
  path = require('path'),
  sourcePath = path.join(__dirname, '../src'),
  staticPath = path.join(__dirname, '../dist');

module.exports = {
  context: sourcePath,
  entry: {
    app: './index.js'
  },

  output: {
    path: staticPath,
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.html$/,
      exclude: /node_modules/,
      use: 'file-loader?name=[name].[ext]'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx', 'scss', '.css'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      sourcePath
    ]
  },

  devServer: {
    contentBase: sourcePath,
    historyApiFallback: true,
    port: 12580
  }
};