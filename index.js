'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./pokemon');

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);

exports.getName = id => {
	const name = pokemon[id - 1];

	if (!name) {
		throw new Error('Invalid ID');
	}

	return name;
};

exports.getId = name => {
	const index = pokemon.indexOf(name);

	if (index === -1) {
		throw new Error('Invalid name');
	}

	return index + 1;
};
