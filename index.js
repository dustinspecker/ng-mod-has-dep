'use strict';

/**
 * Returns if dependency is listed in app's dependencies
 * @param {String} fileContents
 * @param {String} dependency
 * @return {Boolean}
 */
module.exports = function ngModHasDep(fileContents, dependency) {
  var regex = new RegExp('[.]module[^$]*\'[^$]*\', \\[[^$]*\'' + dependency + '\'[^$]*\\]');
  return regex.test(fileContents);
};
