'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./pokemon');
const pokemonGerman = require('./pokemon_de');

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);

function getLocalizedPokemonList(lang) {
	let list;

	switch (lang) {
		case 'de':
			list = pokemonGerman;
			break;
		default:
			list = pokemon;
	}

	return list;
}

exports.getName = (id, lang) => {
	const list = getLocalizedPokemonList(lang);
	const name = list[id - 1];

	if (!name) {
		throw new Error(`Pokémon with ID ${id} does not exist`);
	}

	return name;
};

exports.getId = (name, lang) => {
	const list = getLocalizedPokemonList(lang);
	const index = list.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokémon with name ${name} does not exist`);
	}

	return index + 1;
};
