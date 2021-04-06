const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: `${__dirname}/js/app.js`,
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.min.js',
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'bundle.min.css' })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  optimization:{
    minimize: true,
    minimizer:[
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
};