'use strict';
const uniqueRandomArray = require('unique-random-array');
const pkg = require('./package');
const pokemon = require('./pokemon');

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);

function getLocalizedList(lang) {
	if (!lang || lang === 'en') {
		return pokemon;
	}

	try {
		return require(`./pokemon_${lang}`);
	} catch (err) {
		throw new Error(`List for language code '${lang}' does not exist. ` +
			`Please help to add more languages: https://github.com/${pkg.repository}`);
	}
}

exports.getName = (id, lang) => {
	const list = getLocalizedList(lang);
	const name = list[id - 1];

	if (!name) {
		throw new Error(`Pokémon with ID '${id}' does not exist. ` +
			`Please report to https://github.com/${pkg.repository}/issues if we missed something.`);
	}

	return name;
};

exports.getId = (name, lang) => {
	const list = getLocalizedList(lang);
	const index = list.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokémon with name '${name}' does not exist for language code '${lang}'. ` +
			`Please help to add more languages: https://github.com/${pkg.repository}`);
	}

	return index + 1;
};
