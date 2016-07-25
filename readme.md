# pokemon [![Build Status](https://travis-ci.org/sindresorhus/pokemon.svg?branch=master)](https://travis-ci.org/sindresorhus/pokemon)

> Get [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon) names

The name list is just a [JSON file](pokemon.json) and can be used wherever.

![](header.jpg)


## Install

```
$ npm install --save pokemon
```


## Usage

```js
const pokemon = require('pokemon');

pokemon.random();
//=> 'Snorlax'
```


## API

### .all

Type: `Array`

All names.

### .random()

Type: `Function`

Random name.


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
