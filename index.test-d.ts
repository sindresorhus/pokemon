import {expectType, expectError} from 'tsd';
import pokemon = require('.');

const language: pokemon.Language = 'de';
expectError<pokemon.Language>('foo');

expectType<readonly string[]>(pokemon.all());
expectType<readonly string[]>(pokemon.all('de'));
expectType<string>(pokemon.random());
expectType<string>(pokemon.random('de'));
expectType<string>(pokemon.getName(100));
expectType<string>(pokemon.getName(100, 'de'));
expectType<number>(pokemon.getId('Snorlax'));
expectType<number>(pokemon.getId('Relaxo', 'de'));
expectType<ReadonlySet<string>>(pokemon.languages);
pokemon.languages.has('ja');
