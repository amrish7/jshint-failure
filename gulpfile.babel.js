var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp.src(['index.js', 'cyclomaticComplexity.js'])
        .pipe(jshint({esnext:true, node:true}))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter("fail")); // Exit with non-0 status if the lint failed.
});

gulp.task('default', ['lint']);