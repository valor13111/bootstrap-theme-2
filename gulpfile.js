var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var ejs         = require('gulp-ejs');

gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(browserSync.stream());
});

gulp.task('ejs', function() {
  return gulp.src('templates/*.ejs')
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('server', ['sass'], function() {
  browserSync.init({
    server: "./dist"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'dist/assets/scss/*.scss', 'scss/*.scss'], ['sass']);
  gulp.watch("./dist/*.html").on('change', browserSync.reload);
})

gulp.task('default', ['js', 'server', 'ejs']);
