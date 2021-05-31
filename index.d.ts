declare namespace pokemon {
	type Language =
		| 'de'
		| 'en'
		| 'fr'
		| 'es'
		| 'ja'
		| 'ko'
		| 'ru'
		| 'th'
		| 'zh-Hans'
		| 'zh-Hant';
}

declare const pokemon: {
	/**
	Get all Pokémon names.

	@param language - Language code to retrieve the Pokémon for.

	@example
	```
	import pokemon = require('pokemon');

	pokemon.all();
	//=> ['Bulbasaur', …]

	pokemon.all('de');
	//=> ['Bisasam', …]
	```
	*/
	all(language?: pokemon.Language): readonly string[];

	/**
	Get random Pokémon name.

	@param language - Language code to retrieve the Pokémon for.

	@example
	```
	import pokemon = require('pokemon');

	pokemon.random();
	//=> 'Vigoroth'

	pokemon.random('de');
	//=> 'Muntier'
	```
	*/
	random(language?: pokemon.Language): string;

	/**
	Get Pokémon name from ID.

	@param id - The ID of a Pokémon, retrieved via `getId()`.
	@param language - Language code to retrieve the Pokémon for.

	@example
	```
	import pokemon = require('pokemon');

	pokemon.getName(100);
	//=> 'Voltorb'

	pokemon.getName(100, 'de');
	//=> 'Voltobal'
	```
	*/
	getName(id: number, language?: pokemon.Language): string;

	/**
	Get Pokémon ID from name.

	@param name - The Pokémon name in the `language` locale.
	@param language - Language code to retrieve the Pokémon for.

	@example
	```
	import pokemon = require('pokemon');

	pokemon.getId('Snorlax');
	//=> 143

	pokemon.getId('Relaxo', 'de');
	//=> 143
	```
	*/
	getId(name: string, language?: pokemon.Language): number;

	/**
	@example
	```
	import pokemon = require('pokemon');

	pokemon.languages.has('ja');
	//=> true
	```
	*/
	readonly languages: ReadonlySet<string>;
};

export = pokemon;
