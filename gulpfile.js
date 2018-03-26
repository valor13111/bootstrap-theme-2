const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const ejs         = require('gulp-ejs');
const imagemin    = require('gulp-imagemin');
const cleanCSS    = require('gulp-clean-css');
const htmlmin     = require('gulp-htmlmin');

gulp.task('sass', () => {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', '_dev_stylesheets/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("_dev_stylesheets/css"))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(browserSync.stream());
});

// TEMPLATING
gulp.task('ejs', () => {
  return gulp.src('_dev_templates/*.ejs')
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest('_dev_html'));
});

// MINIFYING TASKS
gulp.task('imagemin', () => {
  return gulp.src('_dev_images/*')
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('minify-css', () => {
  return gulp.src('_dev_stylesheets/css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('minify-html', () => {
  return gulp.src('_dev_html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// BROWSERSYNC
gulp.task('server', ['sass'], () => {
  browserSync.init({
    server: "dist"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'dist/assets/scss/*.scss', '_dev_stylesheets/scss/*.scss'], ['sass']);
  gulp.watch("dist/*.html").on('change', browserSync.reload);
})

// DEFAULT TASK GULP EXECUTES
gulp.task('default', ['js', 'server', 'ejs', 'imagemin', 'minify-css', 'minify-html']);
