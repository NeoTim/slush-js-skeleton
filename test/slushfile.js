var expect = require('chai').expect;

describe('slush-js-skeleton', function() {
  it('copies templates', function() {
    require('../slushfile.js');
    var gulp = require('gulp');
    gulp.run('default');
  });
});
