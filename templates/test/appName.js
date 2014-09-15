/*!
 * <%= appNameSlug %>
 * https://github.com/<%= userName %>/<%= appNameSlug %>
 */

'use strict';

var expect = require('chai').expect;
var lib = process.env.JSCOV ? require('../lib-cov/<%= appNameSlug %>') : require('../lib/<%= appNameSlug %>');

describe('<%= appNameSlug %> module', function() {
  it('exports object', function() {
    expect(lib).to.be.an('object');
  });
});
