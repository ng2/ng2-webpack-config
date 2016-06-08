/**
 * @author: @AngularClass
 */
'use strict';

// Look in ./config for karma.conf.js
const config = require('./path-to-config');

module.exports = require('./config/karma.conf.js')(config);
