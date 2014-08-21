/*
 * <%= appNameSlug %>
 * https://github.com/<%= userName %>/<%= appNameSlug %>
 *
 * Copyright (c) <%= year %> <%= authorName %><% if (license !== 'Private') { %>
 * Licensed under the <%= license %> license.<% } %>
 */

'use strict';

var expect = ((typeof chai === 'object') ? chai : require('chai')).expect;
var lib = process.env.JSCOV ? require('../lib-cov/<%= appNameSlug %>') : require('../lib/<%= appNameSlug %>');

describe('<%= appNameSlug %> module', function() {
  it('exports object', function() {
    expect(lib).to.be.an('object');
  });
});
