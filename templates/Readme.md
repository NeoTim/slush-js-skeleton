# <%= appName %> [![Build Status](http://img.shields.io/travis/<%= userName %>/<%= appNameSlug %>.svg?style=flat)](http://travis-ci.org/<%= userName %>/<%= appNameSlug %>) [![NPM version](http://img.shields.io/npm/v/<%= appNameSlug %>.svg?style=flat)](https://www.npmjs.org/package/<%= appNameSlug %>) [![Dependency Status](http://img.shields.io/david/<%= userName %>/<%= appNameSlug %>.svg?style=flat)](https://david-dm.org/<%= userName %>/<%= appNameSlug %>)

> <%= appDescription %>

## Installation

<% if (pkgType === 'node' || pkgType === 'both') { %>
Install using [npm](https://www.npmjs.org/):

```sh
npm install <%= appNameSlug %>
```<% } %><% if (pkgType === 'browser' || pkgType === 'both') { %>
Install using [bower](http://bower.io/):

```sh
bower install <%= appNameSlug %>
```

Using browser script tag and global (UMD wrapper):

```html
// Available via window.<%= appNameSlug %>
<script src="dist/<%= appNameSlug %>.js"></script>
```<% } %>

## Contributing

Please submit all issues and pull requests to the [<%= userName %>/<%= appNameSlug %>](http://github.com/<%= userName %>/<%= appNameSlug %>) repository!

## Tests

Run tests using `npm test` or `gulp test`.

## Code coverage

Generate code coverage using `gulp coverage` and open `coverage.html` in your
web browser.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/<%= userName %>/<%= appNameSlug %>/issues).
