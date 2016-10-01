/* eslint no-invalid-this: off */

'use strict';

/**
 * @returns {void}
 */
function configuring() {
  this.spawnCommand( 'npm', [ 'init' ] );
}

module.exports = configuring;
