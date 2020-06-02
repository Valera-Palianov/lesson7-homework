const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
 
sass.compiler = require('node-sass')
 
gulp.task('sass', function () {
  return gulp.src('./src/**/*.sass')
  	.pipe(concat('style.sass'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
})
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.sass', gulp.parallel('sass'))
})

exports.default = gulp.series('sass', 'sass:watch')