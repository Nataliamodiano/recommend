var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var print = require('gulp-print');

var libraries = [
  'client/bower_components/angular/angular.min.js',
  'client/bower_components/angular-route/angular-route.min.js'
]

var angular = [
  'client/app/**/*.module.js',
  'client/app/**/*.js'
];

var app = 'server/app.js';

gulp.task('default', function() {
  nodemon({
    script: app,
  }).on('start', ['test']);
});

gulp.watch(['client/**/.js', 'client/*.html'], ['build']);

gulp.task('angular', function() {
  return gulp.src(angular)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('server/public'));
})

gulp.task('views', function() {
  return gulp.src('client/**/*.html')
    .pipe(gulp.dest('server/public'));
})

gulp.task('build', ['angular', 'views', 'concat'], function() {
  return gulp.src(['client/index.html'])
    .pipe(gulp.dest('server/public'));
})

gulp.task('concat', function() {
  return gulp.src(libraries) 
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('server/public'))
})

gulp.task('test', function() {
  return gulp.src('server/**/*.spec.js')
    .pipe(mocha());
})
