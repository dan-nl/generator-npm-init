/* eslint no-invalid-this: off */

'use strict';

/**
 * @returns {undefined}
 */
function initializing() {
  this.spawnCommandSync( 'npm', [ 'init' ] );
}

module.exports = initializing;
