var gulp        = require('gulp'),
  gutil         = require('gulp-util'),
  plumber       = require('gulp-plumber'),
  source        = require('vinyl-source-stream'),
  browserify    = require('browserify'),
  jshint        = require('gulp-jshint'),
  sass          = require('gulp-ruby-sass'),
  prefix        = require('gulp-autoprefixer');
  
var js_files = ['./src/*.js', './src/**/*.js'];
  
var onError = function (err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err));
};

/*
  Build
*/
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

/*
  Example
*/
gulp.task('example', function () {
  gulp.watch(['./example/app.js', './example/style.scss'], ['lint_example', 'browserify_example', 'sass_example']);
});

gulp.task('lint_example', function () {
  return gulp.src('./example/app.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify_example', function () {
  return browserify('./example/app.js', {
      debug: true
    })
    .bundle()
    .pipe(source('app.browserifed.js'))
    .pipe(gulp.dest('./example/'));
});

gulp.task('sass_example', function () {
  return gulp.src('./example/style.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      style: 'compact'
    }))
    .pipe(prefix("last 2 versions", "> 5%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./example/'));
});
