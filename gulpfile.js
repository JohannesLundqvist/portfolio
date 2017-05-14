var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var imagemin = require('gulp-imagemin');

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

gulp.task('imagemin', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('imgmin'));

      gulp.src('img/automanager/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('imgmin/automanager/'));

      gulp.src('img/bellastellaria/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('imgmin/bellastellaria/'));

      gulp.src('img/campaignGen/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('imgmin/campaignGen/'));

      gulp.src('img/hamlin/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('imgmin/hamlin/'));

      gulp.src('img/honeycomb/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('imgmin/honeycomb/'));

      gulp.src('img/ixdRedesign/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('imgmin/ixdRedesign/'));

      gulp.src('img/turnapp/*')
    		.pipe(imagemin())
    		.pipe(gulp.dest('imgmin/turnapp/'));
  });


gulp.task('default', ['serve', 'scripts', 'imagemin']);
