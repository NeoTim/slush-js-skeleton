# slush-js-skeleton [![Build Status](https://img.shields.io/travis/alexmingoia/slush-js-skeleton.svg?style=flat)](http://travis-ci.org/alexmingoia/slush-js-skeleton) [![NPM version](https://img.shields.io/npm/v/slush-js-skeleton.svg?style=flat)](http://badges.enytc.com/for/npm/slush-js-skeleton) [![Bitdeli Badge](https://img.shields.io/npm/dm/slush-js-skeleton.svg?style=flat)](https://npmjs.org/package/slush-js-skeleton)

> Generate node and/or browser package skeleton. Readme.md + package.json +
> bower.json + gulpfile.js + mocha test harness (with browser support) + jshint + jscoverage.

# Features

* Create node and/or browser packages
* Readme, package.json, and bower.json boilerplate
* [Gulp][0] task runner boilerplate
* Automatic docs and readme generation using [jsdoc-to-markdown][1]
* Test harness using [mocha][2] and [chai][3] assertions
* Browser tests using [mocha-phantomjs][4] for browser packages
* Code instrumentation task with coverage report using [jscoverage][5]

## Installation

Install [slush][6] if you haven't:

```sh
npm install --global slush
```

Install slush-js-skeleton:

```sh
npm install --global slush-js-skeleton
```

## Usage

```sh
mkdir myproject
cd myproject
slush js-skeleton
```

## Gulp tasks provided

### test

Run tests using [mocha][2] or [mocha-phantomjs][4] for browser packages.

### docs

Generate [jsdoc-to-markdown][1] and insert into readme template.

### coverage

Output test coverage to `coverage.html` using [jscoverage][5].

### wrap-umd

Wrap in [Universal Module Definition][7] for distribution and save in `dist`.

### jshint

Run jshint.

### watch

Watch for file changes and run tests and jshint.

## Contributing

Please submit all issues and pull requests to the [alexmingoia/slush-js-skeleton](http://github.com/alexmingoia/slush-js-skeleton) repository!

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/alexmingoia/slush-js-skeleton/issues).

[0]: https://github.com/gulpjs/gulp
[1]: https://github.com/75lb/jsdoc-to-markdown
[2]: https://github.com/mochajs/mocha
[3]: http://chaijs.com
[4]: https://github.com/metaskills/mocha-phantomjs
[5]: https://github.com/fishbar/jscoverage
[6]: https://github.com/slushjs/slush
[7]: https://github.com/umdjs/umd
