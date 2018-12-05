var 
    gulp  = require('gulp');
    
/**
 * Copy fonts files
 * @function images
 */

gulp.task('fonts', function() {
    gulp
        .src('./src/assets/fonts/**/*.*')
        .pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.watch(['./src/assets/fonts/**/*.*'], ['fonts']);