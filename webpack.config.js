// const path = require('path');

// module.exports = {
//   entry: './index.js',
//   target: 'node',
//   externals: [nodeExternals()],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
// };

var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/icecold.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'icecold.js',
    library: 'icecold',
    libraryTarget: 'commonjs'
  },
};