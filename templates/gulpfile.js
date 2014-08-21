/*
 * <%= appNameSlug %>
 * https://github.com/<%= userName %>/<%= appNameSlug %>
 *
 * Copyright (c) <%= year %> <%= authorName %><% if (license !== 'Private') { %>
 * Licensed under the <%= license %> license.<% } %>
 */

'use strict';

var gulp = require('gulp');<% if (pkgType === 'node') { %>
var mocha = require('gulp-mocha');<% } else { %>
var wrapUMD = require('gulp-wrap-umd');
var Browserify = require('browserify');
var mochaPhantomJS = require('gulp-mocha-phantomjs');<% } %>
var instrument = require('gulp-instrument');
var source = require('vinyl-source-stream');
var spawn = require('child_process').spawn;
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('jshint', function () {
  return gulp.src(['lib/**/*.js', 'test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
<% if (pkgType === 'node') { %>
gulp.task('test', function () {
  return gulp.src('test/**/*.js')
    .pipe(mocha({
      globals: ['chai'],
      timeout: 6000,
      ignoreLeaks: false,
      ui: 'bdd',
      reporter: 'spec'
    }));
});<% } else { %>
gulp.task('wrap-umd', function() {
  return gulp.src('lib/<%= appNameSlug %>.js')
    .pipe(wrapUMD({
      namespace: "<%= appNameSlug %>"
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify-tests', function() {
  var bundler = new Browserify();
  bundler.add('./test/<%= appNameSlug %>.js');
  bundler.ignore('../lib-cov/<%= appNameSlug %>');
  return bundler.bundle()
    .pipe(source('tests.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['browserify-tests'], function () {
  return gulp.src('test/<%= appNameSlug %>.html')
    .pipe(mochaPhantomJS({
      mocha: {
        globals: ['chai'],
        timeout: 6000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
      }
    }));
});<% } %>

gulp.task('instrument', function() {
  return gulp.src('lib/**/*.js')
    .pipe(instrument())
    .pipe(gulp.dest('lib-cov'));
});

gulp.task('coverage', ['instrument'], function() {
  process.env.JSCOV = true;<% if (pkgType === 'node') { %>
  return spawn('./node_modules/gulp-mocha/node_modules/mocha/bin/mocha', [<% } else { %>
  return spawn('./node_modules/gulp-mocha-phantomjs/node_modules/mocha-phantomjs/node_modules/mocha/bin/mocha', [<% } %>
    'test', '--reporter', 'html-cov'
  ]).stdout
    .pipe(source('coverage.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['jshint']);
});

gulp.task('clean', function() {
  return gulp.src(['lib-cov', 'coverage.html', 'npm-debug.log']).pipe(clean());
});

gulp.task('default', ['jshint', 'test', 'watch']);
