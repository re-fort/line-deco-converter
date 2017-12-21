const path = require('path')
const webpack = require('webpack')

const _src = 'src'
const _dist = 'dist'
const _test = 'test'

module.exports = {
  entry: {
    build: `./src/index.js`
  },
  output: {
    path: path.resolve(__dirname, _dist),
    filename: '[name].js',
    library: 'LineDeco',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, _src),
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, _src),
          path.resolve(__dirname, _test)
        ],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comment: false,
      compress: {
        warnings: false,
      },
    })
  ]
}
