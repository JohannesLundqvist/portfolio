var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("js/*.js", ['scripts']);
    //gulp.watch("js/*.js", ['compress']);
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
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('js'));
});
gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/scripts.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', ['serve', 'scripts', 'compress']);
