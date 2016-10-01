'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.configuring = require( './configuring' );

module.exports = generators.Base.extend( generator );
