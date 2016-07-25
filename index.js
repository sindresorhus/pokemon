'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./pokedex');

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);
