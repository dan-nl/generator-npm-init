'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
    {
      default: true,
      message: 'continue with npm init?',
      name: 'continue-npm',
      type: 'confirm'
    }
  ];
}

module.exports = getGeneratorPrompts;
