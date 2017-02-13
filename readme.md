# pokemon [![Build Status](https://travis-ci.org/sindresorhus/pokemon.svg?branch=master)](https://travis-ci.org/sindresorhus/pokemon)

> Get [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon) names

The name list is just a [JSON file](data/en.json) and can be used wherever.

![](header.jpg)


## Install

```
$ npm install --save pokemon
```


## Usage

```js
const pokemon = require('pokemon');

pokemon.all();
//=> ['Bulbasaur', ...]

pokemon.random();
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

pokemon.getId('Dratini');
//=> 147
```


## API

### .all(lang: *string* = 'en'): *string[]*

Get a list of all names.

#### lang

[Language code](#supported-languages) to retrieve the list of Pokémon for.

```js
pokemon.all();
//=> ['Bulbasaur', ...]
pokemon.all('de');
//=> ['Bisasam', ...]
```

### .random(lang: *string* = 'en'): *string*

Random name.

### .getName(id: *number*, lang: *string* = 'en'): *string*

Get name from ID.

#### lang

[Language code](#supported-languages) to retrieve the Pokémon for.

```js
pokemon.getName(100);
//=> 'Voltorb'
pokemon.getName(100, 'de');
//=> 'Voltobal'
```

### .getId(name: *string*, lang: *string* = 'en'): *number*

Get ID from name.

#### lang

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
- `ja` (Japanese)
- `ko` (Korean)
- `ru` (Russian)
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


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
