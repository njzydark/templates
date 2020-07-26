const path = require('path');
const { ContextReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  target: 'electron-main',
  entry: {
    index: path.resolve(__dirname, './src/main/main.js'),
    preload: path.resolve(__dirname, './src/main/preload.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/main'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, './'), 'node_modules', 'src'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@main': path.resolve(__dirname, './src/main'),
      '@renderer': path.resolve(__dirname, './src/renderer'),
    },
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: devMode ? 'source-map' : 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new ContextReplacementPlugin(/any-promise/),
  ],
};
