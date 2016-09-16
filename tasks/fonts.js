'use strict';

let gulp = require('gulp');
let config = require('./gulp.config.js');

gulp.task('fonts', fontsTask);

function fontsTask() {
  return gulp
    .src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
}
