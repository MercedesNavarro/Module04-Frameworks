const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devtool: 'eval-source-map',
  entry: ['./index.tsx', './styles.css'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /..\/node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /..\/node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
  ],
  mode: 'development',
  devServer: {
    stats: 'errors-only',
  },
};
