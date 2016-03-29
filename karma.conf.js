'use strict'

var browsers = ['ChromeCanary', 'FirefoxDeveloper', 'PhantomJS']

if (process.env.TRAVIS) {
  browsers = ['PhantomJS']
}

module.exports = function(karma) {
  karma.set({
    browsers: browsers,
    phantomjsLauncher: {
      exitOnResourceError: true,
    },
    frameworks: [
      'browserify',
      'tap',
      'sinon',
    ],
    browserify: {
      debug:     true,
      transform: [
        'babelify',
        ['browserify-istanbul', {
          instrumenter: require('babel-istanbul')
        }],
        'brfs',
      ],
    },
    files: [
      'test/**/*.js',
    ],
    preprocessors: {
      'src/**/*.js':  ['browserify', 'coverage'],
      'test/**/*.js': ['browserify'],
    },
    reporters: [
      'dots',
      'coverage',
    ],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text' },
        { type: 'html' },
      ],
    },
  })
}
