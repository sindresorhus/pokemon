'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./pokemon');

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);

exports.getName = id => {
	const name = pokemon[id - 1];

	if (!name) {
		throw new Error(`Pokémon with ID ${id} does not exist`);
	}

	return name;
};

exports.getId = name => {
	const index = pokemon.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokémon with name ${name} does not exist`);
	}

	return index + 1;
};
