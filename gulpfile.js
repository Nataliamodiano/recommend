var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');

var angular = [
  'client/app/**/*.module.js',
  'client/app/**/*.js'
];

gulp.task('default', function() {
  nodemon({
    script: 'server/app.js',
    tasks: ['test']
  })
})

gulp.watch(['client/**/.js', 'client/*.html'], ['build']);

gulp.task('angular', function() {
  return gulp.src(angular)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('server/public'));
})

gulp.task('build', ['angular','concat'], function() {
  return gulp.src(['client/index.html'])
    .pipe(gulp.dest('server/public'));
})

gulp.task('concat', function() {
  return gulp.src('client/bower_components/angular/angular.min.js') 
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('server/public'))
})

gulp.task('test', function() {
  return gulp.src('server/**/*.spec.js')
    .pipe(mocha());
})
