'use strict';

/**
 * @type {*[]}
 */
var prompts = [
  {
    default: true,
    message: 'continue with npm init?',
    name: 'continue-npm',
    type: 'confirm'
  }
];

module.exports = prompts;
