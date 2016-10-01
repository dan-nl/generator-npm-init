'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.initializing = require( './initializing' );

module.exports = generators.Base.extend( generator );
