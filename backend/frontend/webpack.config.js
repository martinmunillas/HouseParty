const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'static/frontend/'),
    filename: 'build.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'static/frontend/'),
      }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};
