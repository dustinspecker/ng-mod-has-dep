/* global describe, beforeEach, it */
'use strict';
var assert = require('assert')
  , EOL = require('os').EOL
  , ngModHasDep = require('./');

describe('ng-mod-has-dep', function () {
  var fileContents;

  beforeEach(function () {
    fileContents = ['angular' + EOL,
                    '  .module(\'module\', [' + EOL,
                    '    \'test\'' + EOL,
                    '  ]);'].join('');
  });

  it('should have test dep', function () {
    assert(ngModHasDep(fileContents, 'test') === true);
  });

  it('should not have test1 dep', function () {
    assert(ngModHasDep(fileContents, 'test1') === false);
  });
});
