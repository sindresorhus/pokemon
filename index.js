'use strict';
const uniqueRandomArray = require('unique-random-array');
const pokemon = require('./data/en');

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
	let defaultLang = lang;
	if (!defaultLang) {
		switch (global.navigator && (global.navigator.userLanguage || global.navigator.language || '').toLowerCase()) {
			case 'de':
			case 'de-ch':
			case 'de-at':
			case 'de-lu':
			case 'de-li':
				defaultLang = 'de';
				break;
			case 'fr':
			case 'fr-be':
			case 'fr-ca':
			case 'fr-ch':
			case 'fr-lu':
				defaultLang = 'fr';
				break;
			case 'ja'
				defaultLang = 'ja';
				break;
			case 'ru':
			case 'ru-mi':
			case 'ru-mo':
				defaultLang = 'ru'
				break;
			case 'zh':
			case 'zh-cn':
				defaultLang = 'zh-Hans';
				break;
			case 'zh-tw':
			case 'zh-hk':
			case 'zh-sg':
				defaultLang = 'zh-Hant';
				break;
			default:
				defaultLang = 'en';
		}
	}

	if (!languages.has(lang)) {
		throw new Error(`Localized list for language code '${lang}' does not exist. Pull request welcome: ${repoUrl}`);
	}

	return require(`./data/${defaultLang.toLowerCase()}`);
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
