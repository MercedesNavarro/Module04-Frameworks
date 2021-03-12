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
  entry: ['regenerator-runtime/runtime', './index.tsx', './styles.css'],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
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
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        type: 'asset/resource',
        options: {
          publicPath: 'assets',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
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
