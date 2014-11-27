module.exports = function(config) {
  config.set({
    files: [
      'tests/**/*.js'
    ],
    frameworks: ['browserify', 'jasmine'],
/*     browsers: ['Chrome'], // 'PhantomJS', 'Firefox', 'Safari' */
    preprocessors: {
      'tests/**/*.js': [ 'browserify' ]
    },
    browserify: {
      debug: true,
      transform: ['brfs']
    }
  });
};