var 
    gulp  = require('gulp');
    
/**
 * Copy images files
 * @function images
 */

gulp.task('images', function() {
    gulp
        .src('./src/assets/images/**/*.*')
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.watch(['./src/assets/images/**/*.*'], ['images']);