var 
    gulp  = require('gulp'),
    rename = require('gulp-rename');
    
gulp.task('views', function() {
    gulp
        .src('./src/app/app.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
    gulp
        .src('./src/app/views/**/*.html')
        .pipe(gulp.dest('./dist/views/'));
});

gulp.watch(['./src/app/app.html', './src/app/views/**/*.html'], ['views']);