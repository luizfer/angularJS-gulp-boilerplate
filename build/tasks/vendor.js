var 
    gulp    = require('gulp'),
    packages   = require('../util/getPackages'),
    browserify = require('browserify'),
    source  = require('vinyl-source-stream'),
    resolve = require('resolve');

  gulp.task('vendor', function () {      
      var b = browserify();
      
      b.transform('uglifyify', { global: true  })

      packages().forEach(function (id) {
        b.require(resolve.sync(id), { expose: id });
      });
    
      var stream = b
        .bundle()
        .on('error', function(err){
          console.log(err.message);
          this.emit('end');
        }).pipe(source('vendor.js'));
    
      stream.pipe(gulp.dest('./dist'));
    
      return stream;

  });