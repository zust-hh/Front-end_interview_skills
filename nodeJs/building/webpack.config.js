const path = require('path');

module.exports = {
  entry: {
    index: './src/script/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/script'),
    filename: '[name].js'
  }
}