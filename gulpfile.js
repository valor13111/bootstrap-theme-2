var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var ejs         = require('gulp-ejs');

gulp.task('ejs', function() {
  return gulp.src("src/templates/*.ejs")
      .pipe(ejs({}, {}, {ext:'.html'}))
      .pipe(gulp.dest("../bootstrap-theme-2"));
});

gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

gulp.task('server', ['sass'], function() {
  browserSync.init({
    server: "../bootstrap-theme-2"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch(['src/templates/partials/*.ejs', 'src/templates/*.ejs']).on('change', browserSync.reload);
})

gulp.task('default', ['js', 'server', 'ejs']);
