'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./pokemon');

const repoUrl = 'https://github.com/sindresorhus/pokemon';
const reportText = `Please report to ${repoUrl}/issues if we missed something.`;

exports.all = pokemon;
exports.random = uniqueRandomArray(pokemon);

const languages = new Set([
	'de',
	'en',
	'fr',
	'ja',
	'ru',
	'zh-Hans',
	'zh-Hant'
]);

function getLocalizedList(lang) {
	if (!lang || lang === 'en') {
		return pokemon;
	}

	if (!languages.has(lang)) {
		throw new Error(`Localized list for language code '${lang}' does not exist. Pull request welcome: ${repoUrl}`);
	}

	return require(`./pokemon_${lang}`);
}

exports.getName = (id, lang) => {
	const list = getLocalizedList(lang);
	const name = list[id - 1];

	if (!name) {
		throw new Error(`Pokémon with ID '${id}' does not exist. ${reportText}`);
	}

	return name;
};

exports.getId = (name, lang) => {
	const list = getLocalizedList(lang);
	const index = list.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokémon with name '${name}' does not exist for language code '${lang}'. ${reportText}`);
	}

	return index + 1;
};

exports.languages = languages;
