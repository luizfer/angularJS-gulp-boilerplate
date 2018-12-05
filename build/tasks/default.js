var 
    gulp = require('gulp'),
    runSequence  = require('run-sequence');

/**
 * Default function
 * @function default
 */
gulp.task('default', ['clean'], function () {
    runSequence(
      'browser-sync'
    );
});