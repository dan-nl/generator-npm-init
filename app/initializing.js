/* eslint no-invalid-this: off, no-sync: off */

'use strict';

/**
 * @returns {undefined}
 */
function initializing() {
  this.spawnCommandSync( 'npm', [ 'init' ] );
}

module.exports = initializing;
