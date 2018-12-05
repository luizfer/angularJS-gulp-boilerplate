var gulp = require('gulp');

/**
 * Build any
 * @function build
 */

gulp.task('build', [
    'css', 
    'browserify', 
    'views',
    'images',
    'fonts'
]);