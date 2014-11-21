var gulp        = require('gulp'),
  gutil         = require('gulp-util'),
  plumber       = require('gulp-plumber'),
  source        = require('vinyl-source-stream'),
  browserify    = require('browserify'),
  jshint        = require('gulp-jshint'),
  sass          = require('gulp-ruby-sass'),
  prefix        = require('gulp-autoprefixer');
  
var js_files = ['./lib/*.js', './lib/**/*.js'];
var example_files = ['./example/js/app.js', './example/scss/style.scss'];
  
var onError = function (err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err));
};

gulp.task('default', function () {
  gulp.watch(js_files, ['build']);
  gulp.watch(example_files, ['example']);
});

/*
  LiquifyJS
*/

gulp.task('build', ['lint', 'browserify_example']);

gulp.task('lint', function () {
  return gulp.src(js_files)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

/*
  Example
*/
gulp.task('example', ['lint_example', 'browserify_example', 'sass_example']);

gulp.task('lint_example', function () {
  return gulp.src('./example/app.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify_example', function () {
  return browserify('./example/js/app.js', {
      debug: true
    })
    .transform('brfs')
    .bundle()
    .pipe(source('app.browserifed.js'))
    .pipe(gulp.dest('./example/js/'));
});

gulp.task('sass_example', function () {
  return gulp.src('./example/scss/style.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      style: 'compact'
    }))
    .pipe(prefix("last 2 versions", "> 5%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./example/css/'));
});
