/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var PromptAnswers = require( 'yeoman-prompting-helpers' ).PromptAnswers;

/**
 * @property {Base} this
 * @returns {undefined}
 */
function initializing() {
  this.options.PromptAnswers = this.options.PromptAnswers || new PromptAnswers();
}

module.exports = initializing;
