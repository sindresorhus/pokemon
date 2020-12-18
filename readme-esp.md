# pokemon

> Obtener el nombre de [Pokémones](https://es.wikipedia.org/wiki/Pok%C3%A9mon)

La lista de los nombres solo es un archivo [JSON file](data/en.json) y puede ser usada cuando sea.

![](header.jpg)

## Instalación

```
$ npm install pokemon
```

## Usabilidad

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

Obtén el nombre de los pokemones cómo un `string[]`.

#### language

Tipo: `string`\
Predeterminado: `'en'`

[Código de lenguaje](#supported-languages) para obtener la lista de los Pokémones.

```js
pokemon.all();
//=> ['Bulbasaur', …]
pokemon.all('de');
//=> ['Bisasam', …]
```

### .random(language?)

Obtén un nombre de Pokémon aleatoriamente.

#### language

Tipo: `string`\
Predeterminado: `'en'`

[Código de lenguaje](#supported-languages) para obtener el Pokémon.

```js
pokemon.random();
//=> 'Vigoroth'
pokemon.random('de');
//=> 'Muntier'
```

### .getName(id, language?)

Obtén el nombre del Pokémon a través de su ID.

#### id

Tipo: `number`

El ID de un Pokémon, obtenido a través de `getId()`.

#### language

Tipo: `string`\
Predeterminado: `'en'`

[Código de lenguaje](#supported-languages) para obtener el Pokémon.

```js
pokemon.getName(100);
//=> 'Voltorb'
pokemon.getName(100, 'de');
//=> 'Voltobal'
```

### .getId(name, language?)

Obtén el ID del Pokémon a través de su nombre.

#### name

Tipo: `string`

The Pokémon name in the `language` locale.

#### language

Tipo: `string`\
Predeterminado: `'en'`

[Código de lenguaje](#supported-languages) del nombre localizado.

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

## Idiomas disponibles

El nombre de los Pokémones estan disponibles en los siguientes idiomas:

- `de` (Alemán)
- `en` (Inglés)
- `fr` (Francés)
- `ja` (Japonés)
- `ko` (Coreano)
- `ru` (Ruso)
- `zh-Hans` (Chino simplificado)
- `zh-Hant` (Chino tradicional)

Los código de idiomas siguen las reglas de [Código de idioma IETF](https://es.wikipedia.org/wiki/C%C3%B3digo_de_idioma_IETF).

## Related

- [pokemon-cli](https://github.com/sindresorhus/pokemon-cli) - CLI para este módulo
- [cat-names](https://github.com/sindresorhus/cat-names) - Obtén nombres populares de gatos
- [dog-names](https://github.com/sindresorhus/dog-names) - Obtén nombres populares de perros
- [superb](https://github.com/sindresorhus/superb) - Obtén superb como palabras
- [superheroes](https://github.com/sindresorhus/superheroes) - Obtén nombre de superhéroes
- [supervillains](https://github.com/sindresorhus/supervillains) - Obtén nombre de supervillanos
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Obtén palabras cómo si/no
