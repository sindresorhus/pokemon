'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./data/en.json');

const repositoryUrl = 'https://github.com/sindresorhus/pokemon';
const reportText = `Please report to ${repositoryUrl}/issues if we missed something.`;

const languages = new Set([
	'de',
	'en',
	'fr',
	'es',
	'ja',
	'ko',
	'ru',
	'th',
	'zh-Hans',
	'zh-Hant',
]);

const randomNameGenerators = new Map();

function getLocalizedList(language = 'en') {
	if (language === 'en') {
		return pokemon;
	}

	if (!languages.has(language)) {
		throw new Error(`Localized list for language code '${language}' does not exist. Pull request welcome: ${repositoryUrl}`);
	}

	return require(`./data/${language.toLowerCase()}.json`);
}

exports.all = getLocalizedList;

exports.random = (language = 'en') => {
	if (randomNameGenerators.has(language)) {
		return randomNameGenerators.get(language)();
	}

	const list = getLocalizedList(language);
	const random = uniqueRandomArray(list);
	randomNameGenerators.set(language, random);

	return random();
};

exports.getName = (id, language = 'en') => {
	const list = getLocalizedList(language);
	const name = list[id - 1];

	if (!name) {
		throw new Error(`Pokémon with ID '${id}' does not exist. ${reportText}`);
	}

	return name;
};

exports.getId = (name, language = 'en') => {
	const list = getLocalizedList(language);
	const index = list.indexOf(name);

	if (index === -1) {
		throw new Error(`Pokémon with name '${name}' does not exist for language code '${language}'. ${reportText}`);
	}

	return index + 1;
};

exports.languages = languages;
