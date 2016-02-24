/* global describe, beforeEach, it */
'use strict'
import assert from 'assert'
import {EOL} from 'os'
import ngModHasDep from './lib/'

describe('ng-mod-has-dep', () => {
  let fileContents

  beforeEach(() => {
    fileContents = `
      angular${EOL}
        .module('module', [${EOL}
          'test'${EOL}
        ])
    `
  })

  it('should have test dep', () => {
    assert(ngModHasDep(fileContents, 'test') === true)
  })

  it('should not have test1 dep', () => {
    assert(ngModHasDep(fileContents, 'test1') === false)
  })
})
