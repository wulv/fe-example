var gulp= require('gulp');

gulp.task('js', function () {
  gulp.src(['css/**/*.css'])
 .pipe(gulp.dest('./css'));
});
