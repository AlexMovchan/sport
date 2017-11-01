var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    concat = require('gulp-concat'),
    requireFile = require('gulp-require-file'),
    rigger = require('gulp-rigger'),
    babel = require("gulp-babel"),
    uglify = require('gulp-uglify'),
    pump = require('pump');
 

//concat and uglify all libs which included in libs.js file
gulp.task("concatLIBS", function() {
  gulp.src('app/libs.js')
    .pipe(rigger())
    .pipe(babel())
    .pipe(gulp.dest("dist/js"))
});

//concat all controllers and ect which included in main.js file
gulp.task("concatJS", function() {
  gulp.src('app/main.js')
    .pipe(rigger())
    .pipe(babel())
    .pipe(gulp.dest("dist/js"))
});

//compile all files which included in main.scss file to one css file
gulp.task('sass', function () {
  return gulp.src('app/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['sass', 'webserver', 'sass:watch'])


gulp.task('build', ['concatLIBS', 'concatJS', 'sass', 'webserver', 'sass:watch'])
