var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  nodemon({
    script: 'server/app.js',
    tasks: ['test']
  })
})

gulp.task('build', function() {
  return gulp.src(['client/index.html'])
    .pipe(gulp.dest('server/public'));
})

gulp.task('test', function() {
  return gulp.src('server/**/*.spec.js')
    .pipe(mocha());
})
