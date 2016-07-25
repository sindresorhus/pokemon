'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./pokemon');

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);
