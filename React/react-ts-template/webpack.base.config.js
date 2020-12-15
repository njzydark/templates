/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: '.env' });
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? 'js/[name]-[hash:6].bundle.js' : 'js/[name]-[chunkhash:6].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        common: {
          minSize: 30000,
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  stats: {
    modules: false,
    children: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /\.lazy\.(le|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: devMode ? '[path][name]__[local]' : '[hash:base64]'
              }
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.lazy\.(le|c)ss$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name]-[hash:base64:6].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name]-[contenthash:6].css',
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/public/index.html')
    })
  ]
};
