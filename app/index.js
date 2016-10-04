'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.initializing = require( './initializing' );
generator.prompting = require( './prompting' );

module.exports = generators.Base.extend( generator );
