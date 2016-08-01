'use strict';
const fs = require('fs');
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./pokemon');

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);

function getLocalizedList(lang) {
	if (!lang || lang === 'en') {
		return pokemon;
	}

	try {
		const list = fs.readFileSync(`./pokemon_${lang}.json`, 'utf8');
		return JSON.parse(list);
	} catch (err) {
		throw new Error(`Localized list for language code ${lang} does not exist`);
	}
}

exports.getName = (id, lang) => {
	const list = getLocalizedList(lang);
	const name = list[id - 1];

	if (!name) {
		throw new Error(`Pokémon with ID ${id} does not exist`);
	}

	return name;
};

exports.getId = (name, lang) => {
	const list = getLocalizedList(lang);
	const index = list.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokémon with name ${name} does not exist`);
	}

	return index + 1;
};
