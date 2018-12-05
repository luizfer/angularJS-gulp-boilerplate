var 
    gulp = require('gulp'),
    browserify  = require('browserify'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync').create(),
    packages   = require('../util/getPackages');

/**
 * Bundle the angular app.
 * @function browserify
 */
gulp.task('browserify', function() {
    var b = browserify('./src/app/app.js');
    
    packages().forEach(function (lib) {
        b.external(lib);
    });
    
    var stream = b
        .transform('uglifyify', { 
            global: true  
        })
        .bundle()
        .pipe(source('main.js'));
            
    stream
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
    
    return stream;
});
