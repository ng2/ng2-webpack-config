/* eslint no-process-env: 0*/
'use strict';
/**
 * @author: @AngularClass
 */
// Look in ./config folder for webpack.dev.js
module.exports = getWebpackConfig(process.env.NODE_ENV, require('./path-to-your-config'));

function getWebpackConfig(env, config) {
  switch (env) {
    case 'prod':
    case 'production':
      return require('./config/webpack.prod')(config);
    case 'test':
    case 'testing':
      return require('./config/webpack.test')(config);
    case 'dev':
    case 'development':
    default:
      return require('./config/webpack.dev')(config);
  }
}
