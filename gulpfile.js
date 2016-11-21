'use strict';

const gulp    = require('gulp');
const less    = require('gulp-less');

const LESS_OBJECTS = [ './less/*.less' ];

/* -------------------------------------------------------------------------- */

gulp.task('less', function () {
  return gulp.src('./less/aze.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'));
});

// watches for any change and builds the appropriate route
gulp.task('watch', function () {
  gulp.watch(LESS_OBJECTS, ['less']);
});

// run the build-client and build-server tasks when no arguments
gulp.task('default', function () {
  gulp.start('less', []);
});
