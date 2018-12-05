var 
    gulp = require('gulp'),
    browserSync = require('browser-sync').create();

/**
 * create a server
 * @function browser-sync
 */
gulp.task('browser-sync', ['build', 'watch', 'vendor'], function() {
    browserSync.init({
        watch: true,
        server: {
            baseDir: "./dist"
        },
        browser:"chrome"
    });
});

gulp.task('watch', function() {
    gulp.watch("./src/app/app.js", ['build']);
    gulp.watch("./src/app/**/*.js", ['build']);
    gulp.watch("./src/app/*.html").on('change', browserSync.reload);
    gulp.watch("./src/app/**/*.html").on('change', browserSync.reload);
});