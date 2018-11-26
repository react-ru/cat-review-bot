const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'frontend/src/index.mjs'),
  output: {
    filename: 'frontend.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'source-map'
};
