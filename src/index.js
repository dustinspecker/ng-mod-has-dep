'use strict';

/**
 * Returns if dependency is listed in app's dependencies
 * @param {String} fileContents - Angular module file
 * @param {String} dependency - module dependency to look for
 * @return {Boolean} - dependency is included
 */
module.exports = function (fileContents, dependency) {
  const regex = new RegExp(`[.]module[^$]*'[^$]*', \\[[^$]*'${dependency}'[^$]*\\]`);
  return regex.test(fileContents);
};
