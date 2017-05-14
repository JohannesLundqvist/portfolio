var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("js/*.js", ['scripts']);
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("project/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/styles.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});
gulp.task('scripts', function() {
  return gulp.src(['js/jquery-3.2.1.js', 'js/jquery.touchSwipe.js', 'js/bootstrap.min.js', 'js/app.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve', 'scripts']);
