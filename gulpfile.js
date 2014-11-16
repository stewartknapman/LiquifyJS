var gulp        = require('gulp'),
  gutil         = require('gulp-util'),
  plumber       = require('gulp-plumber'),
  source        = require('vinyl-source-stream'),
  browserify    = require('browserify'),
  jshint        = require('gulp-jshint');
  
var js_files = ['./src/*.js', './src/**/*.js'];
  
var onError = function (err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err));
};

gulp.task('default', function () {
  gulp.watch(js_files, ['lint', 'browserify']);
});

gulp.task('lint', function () {
  return gulp.src(js_files)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function () {
  return browserify('./src/pager.js', {
      debug: true
    })
    .bundle()
    .pipe(source('pager.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('build', function () {
  return browserify('./src/pager.js', {
      debug: true
    })
    .transform({ global: true }, 'uglifyify')
    .bundle()
    .pipe(source('pager.js'))
    .pipe(gulp.dest('./build/'));
});