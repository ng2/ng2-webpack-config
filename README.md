# ng2-webpack-config [![npm version](https://badge.fury.io/js/ng2-webpack-config.svg)](http://badge.fury.io/js/ng2-webpack-config) [![npm downloads](https://img.shields.io/npm/dm/ng2-webpack-config.svg)](https://npmjs.org/ng2-webpack-config)

### Just a few steps to steps to get up and running with angular2 and webpack

1. Copy all `js` files from `samples` folder to your application root folder

```bash
  cp -rf node_modules/ng2-webpack-config/samples/* .
  cp -rf node_modules/ng2-webpack-config/samples/.ng2-config.js .
```

2. Copy `ts` and `.d.ts` files to your `angular2` app root folder ('./src' for example)

```bash
  cp -rf node_modules/ng2-webpack-config/samples/src/*.ts ./src
```

3. Only 2 small steps left to get app and running:
- Open `.ng2-config.js` and update some fields if needed
```js
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
```
- Open `spec-bundle.js` and update `PATH_TO_FILES` const

### Now how to run it

1. Webpack dev build, run: `$ webpack`
2. Webpack prod build, run: `$ NODE_ENV=production webpack`
3. Karma tests, run: `$ karma start`
4. Protractor tests, run `$ protractor`
