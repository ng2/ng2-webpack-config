module.exports = {
  webpack: {
    prod: require('./config/webpack.prod'),
    dev: require('./config/webpack.dev'),
    test: require('./config/webpack.test')
  },
  karma: require('./config/karma.conf'),
  protractor: require('./config/protractor.conf')
};
