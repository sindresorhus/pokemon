# pokemon

> Get [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon) names

The name list is just a [JSON file](data/en.json) and can be used wherever.

![](header.jpg)

## Install

```sh
npm install pokemon
```

## Usage

```js
const pokemon = require('pokemon');

pokemon.all();
//=> ['Bulbasaur', …]

pokemon.random();
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

pokemon.getId('Dratini');
//=> 147
```

## API

### .all(language?)

Get all Pokémon names as a `string[]`.

#### language

Type: `string`\
Default: `'en'`

[Language code](#supported-languages) to retrieve the list of Pokémon for.

```js
pokemon.all();
//=> ['Bulbasaur', …]
pokemon.all('de');
//=> ['Bisasam', …]
```

### .random(language?)

Get random Pokémon name.

#### language

Type: `string`\
Default: `'en'`

[Language code](#supported-languages) to retrieve the Pokémon for.

```js
pokemon.random();
//=> 'Vigoroth'
pokemon.random('de');
//=> 'Muntier'
```

### .getName(id, language?)

Get Pokémon name from ID.

#### id

Type: `number`

The ID of a Pokémon, retrieved via `getId()`.

#### language

Type: `string`\
Default: `'en'`

[Language code](#supported-languages) to retrieve the Pokémon for.

```js
pokemon.getName(100);
//=> 'Voltorb'
pokemon.getName(100, 'de');
//=> 'Voltobal'
```

### .getId(name, language?)

Get Pokémon ID from name.

#### name

Type: `string`

The Pokémon name in the `language` locale.

#### language

Type: `string`\
Default: `'en'`

[Language code](#supported-languages) of the localized name.

```js
pokemon.getId('Snorlax');
//=> 143
pokemon.getId('Relaxo', 'de');
//=> 143
```

### .languages: *Set*

```js
pokemon.languages.has('ja');
//=> true
```

## Supported languages

Pokémon names are available for the following languages:

- `de` (German)
- `en` (English)
- `fr` (French)
- `es` (Spanish)
- `ja` (Japanese)
- `ko` (Korean)
- `ru` (Russian)
- `th` (Thai)
- `zh-Hans` (Simplified Chinese)
- `zh-Hant` (Traditional Chinese)

The language codes follow the [IETF BCP 47 standard](https://en.wikipedia.org/wiki/IETF_language_tag).

## Related

- [pokemon-cli](https://github.com/sindresorhus/pokemon-cli) - CLI for this module
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words

## Known Issues

- `ru` (Russian)
	- Does not include Pokemon 1009-1025 (Future Paradox Pokemon, and Pokemon released in Gen 9 Expansions - The Teal Mask, and The Indigo Disk). Cannot find credible source for translation.
- `th` (Thai)
	- Does not include Pokemon 1011-1025 (Pokemon released in Gen 9 Expansions - The Teal Mask, and The Indigo Disk). Cannot find credible source for translation.
