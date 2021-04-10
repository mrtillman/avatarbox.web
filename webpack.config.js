const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    bundle:[
      `${__dirname}/js/bundle.js`,
    ],
    calendar:[
      `${__dirname}/js/calendar.js`
    ]
  },
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].min.js',
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].min.css" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: [
          'url-loader',
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