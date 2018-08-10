var gulp = require('gulp');
var jade = require('gulp-jade');

/* #### jade to HTML ### */

gulp.task('jade', function(){
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))
})