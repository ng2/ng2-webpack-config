/* eslint no-var:0 */
'use strict';
var pkg = require('./package.json');

module.exports = {
  // metadata
  title: pkg.description,
  baseUrl: '/',
  // angular2 root folder name
  src: 'src',
  // dist folder name
  dist: 'dist',
  // entry html file
  htmlIndexes: ['index.html'],
  // karma bundle src
  spec: './spec-bundle.js',
  // webpack entry
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    main: './src/index.ts'
  },
  // in most cases you don't need to change this line
  commonChunks: {
    name: ['polyfills', 'vendor'].reverse()
  },
  // webpack alias (just in case)
  alias: {},
  // copy any additional files you need
  copy: [
    {from: 'src/favicon.ico', to: 'favicon.ico'}
  ]
};
