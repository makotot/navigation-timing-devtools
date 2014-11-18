var gulp = require('gulp'),
  del = require('del'),
  to5 = require('gulp-6to5'),
  sourcemap = require('gulp-sourcemaps'),
  runSequence = require('run-sequence');

var dest = './extension';


gulp.task('clean', del.bind(null, [dest]));

gulp.task('compile-to5', function () {
  return gulp.src('./src/js/*.js')
    .pipe(sourcemap.init())
    .pipe(to5())
    .pipe(sourcemap.write())
    .pipe(gulp.dest(dest + '/js'));
});

gulp.task('touchManifest', function () {
  return gulp.src('./src/manifest.json')
    .pipe(gulp.dest(dest));
});

gulp.task('copy', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest(dest));
});

gulp.task('compile', function () {
  runSequence('clean', [
    'touchManifest',
    'compile-to5',
    'copy'
  ]);
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['copy']);
  gulp.watch(['./src/**/*.js'], ['compile-to5']);
});


gulp.task('default', ['compile']);
gulp.task('serve', ['compile', 'watch']);
