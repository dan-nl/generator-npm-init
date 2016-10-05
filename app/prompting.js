/* eslint no-invalid-this: off, consistent-this: off, no-sync: off */

'use strict';

/**
 * module dependencies
 */
var displayGeneratorIntro = require( 'yeoman-helpers' ).displayGeneratorIntro;
var generator_ascii_art = require( './helpers/ascii-art' );
var generator_intro_text = require( './helpers/intro-text' );
var prompts = require( './helpers/prompt-continue' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;

/**
 * @property {Base} this
 * @property {Object} this.options
 * @property {boolean} [this.options.asciiArt]
 * @property {boolean} [this.options.introText]
 *
 * @returns {undefined}
 */
function prompting() {
  var generator = this;

  displayGeneratorIntro(
    this,
    {
      ascii_art: {
        art: generator_ascii_art,
        display: this.options.asciiArt
      },
      intro_text: generator_intro_text
    }
  );

  /**
   * @property {Function} then
   */
  return promptingHelper( this, prompts )
    .then(
      function () {
        if ( generator.options.PromptAnswers.get( 'continue-npm' ) ) {
          generator.log();
          generator.spawnCommandSync( 'npm', [ 'init' ] );
        } else {
          generator.log();
        }
      }
    );
}

module.exports = prompting;
