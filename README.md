# ng-mod-has-dep [![NPM version](https://badge.fury.io/js/ng-mod-has-dep.svg)](http://badge.fury.io/js/ng-mod-has-dep) [![Build Status](https://travis-ci.org/dustinspecker/ng-mod-has-dep.svg)](https://travis-ci.org/dustinspecker/ng-mod-has-dep) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/ng-mod-has-dep.svg)](https://coveralls.io/r/dustinspecker/ng-mod-has-dep?branch=master)
[![Code Climate](https://codeclimate.com/github/dustinspecker/ng-mod-has-dep/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/ng-mod-has-dep) [![Dependencies](https://david-dm.org/dustinspecker/ng-mod-has-dep.svg)](https://david-dm.org/dustinspecker/ng-mod-has-dep/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/ng-mod-has-dep/dev-status.svg)](https://david-dm.org/dustinspecker/ng-mod-has-dep/#info=devDependencies&view=table)


> Check if Angular module has a dependency

## Usage

```javascript
var ngModHasDep = require('ng-mod-has-dep')
  , fs = require('fs');

/* module.js
angular
  .module('module', [
    'dep'
  ]);
*/
var fileContents = fs.readFileSync('module.js');

ngModHasDep(fileContents, 'dep');
//=> true

ngModHasDep(fileContents, 'dep2');
//=> false
```

## License
MIT