module.exports = function(config) {
  config.set({
    files: [
      'tests/**/*.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'tests/**/*.js': [ 'browserify' ]
    },
    browserify: {
      debug: true,
      transform: ['brfs']
    }
  });
};