var 
    gulp = require('gulp'),
    del  = require('del');

/**
 * Clean build path.
 * @function clean
 */

gulp.task('clean', function () {
    return del(['./dist/']);
}); 