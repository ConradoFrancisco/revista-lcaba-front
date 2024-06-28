const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

gulp.task('styles', () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env', '@babel/react']
    }))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', () => {
  browserSync.init({
    server: './public'
  });

  gulp.watch('src/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('src/js/**/*.js', gulp.series('scripts'));
  gulp.watch('public/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('styles', 'scripts', 'serve'));