var 
    gulp  = require('gulp'), 
    csso  = require('gulp-csso'),  
    gutil = require('gulp-util');
    
/**
 * Copy and mimify css files
 * @function css
 */

gulp.task('css', function() {
    gulp
        .src('./src/assets/css/**/*.css')
        .pipe(gulp.dest('./dist/assets/css'));
});

gulp.watch(['./src/assets/css/**/*.css'], ['css']);