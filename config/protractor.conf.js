/**
 * @author: @AngularClass
 */
'use strict';

require('ts-node/register');
var helpers = require('./helpers');
var path = require('path');

module.exports = makeConfig;

function makeConfig(conf) {
  return {
    baseUrl: 'http://localhost:3000/',

    // use `npm run e2e`
    specs: [
      helpers.root(path.join(conf.src, '/**/**.e2e.ts')),
      helpers.root(path.join(conf.src, '/**/*.e2e.ts'))
    ],
    exclude: [],

    framework: 'jasmine2',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
      showTiming: true,
      showColors: true,
      isVerbose: false,
      includeStackTrace: false,
      defaultTimeoutInterval: 400000
    },
    directConnect: true,

    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['show-fps-counter=true']
      }
    },

    /* global browser:false */
    onPrepare() {
      browser.ignoreSynchronization = true;
    },

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     */
    useAllAngular2AppRoots: true
  };
}

