/*
 * slush-js-skeleton
 * https://github.com/alexmingoia/slush-js-skeleton
 *
 * Copyright (c) 2014 Alex Mingoia
 * Licensed under the BSD license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    path = require('path'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');

gulp.task('default', function(done) {
  var prompts = [{
    type: 'list',
    name: 'pkgType',
    message: 'Choose your package type',
    choices: ['node', 'browser', 'both'],
    default: 'node'
  }, {
    name: 'appName',
    message: "What's the module name?",
    default: _.slugify(path.basename(process.cwd()))
  }, {
    name: 'appDescription',
    message: "What's the description?"
  }, {
    name: 'appVersion',
    message: "What's the module version?",
    default: '0.1.0'
  }, {
    name: 'authorName',
    message: "What's the author name?",
  }, {
    name: 'authorEmail',
    message: "What's the author email?",
  }, {
    name: 'userName',
    message: "What's the github username?",
  }, {
    type: 'list',
    name: 'license',
    message: 'Choose your license type',
    choices: ['Open Works License (OWL)'],
    default: 'Open Works License (OWL)'
  }, {
    type: 'confirm',
    name: 'coveralls',
    message: 'Would you like to report code coverage to coveralls?',
    default: false
  }, {
    type: 'confirm',
    name: 'enableBin',
    message: 'Would you like to enable bin option?',
    default: false
  }, {
    type: 'confirm',
    name: 'isPrivate',
    message: 'Is this module private?',
    default: false
  }];

  inquirer.prompt(prompts, function(answers) {
    if (!answers.appName) {
      return done(new Error("Must choose module name."));
    }

    answers.appNameSlug = _.slugify(answers.appName);

    var d = new Date();
    answers.year = d.getFullYear();
    answers.date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();

    var files = [__dirname + '/templates/**'];

    if (answers.pkgType === 'node') {
      files.push('!' + __dirname + '/templates/bower.json');
      files.push('!' + __dirname + '/templates/appName.html');
    }

    if (!answers.enableBin) {
      files.push('!' + __dirname + '/templates/bin/**/**');
      files.push('!' + __dirname + '/templates/bin');
    }

    gulp.src(files)
      .pipe(template(answers))
      .pipe(rename(function(file) {
        var appReplace = file.basename.replace(new RegExp('appName', 'g'), answers.appNameSlug);
        file.basename = appReplace;
        if (file.basename[0] === '_') {
          file.basename = '.' + file.basename.slice(1);
        }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', done);
  });
});
