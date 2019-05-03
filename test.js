import test from 'ava';
import pokemon from '.';

function testAll(t, language, expectedNames) {
	t.deepEqual(pokemon.all(language).slice(0, 3), expectedNames);
}

function testNames(t, language, expectedNames) {
	t.is(pokemon.getName(1, language), expectedNames[0]);
	t.is(pokemon.getName(400, language), expectedNames[1]);
	t.is(pokemon.getName(721, language), expectedNames[2]);
}

function testIDs(t, language, actualNames) {
	t.is(pokemon.getId(actualNames[0], language), 1);
	t.is(pokemon.getId(actualNames[1], language), 400);
	t.is(pokemon.getId(actualNames[2], language), 721);
}

function testRandom(t, language, expectedName) {
	t.not(pokemon.all(language).indexOf(expectedName), -1);
}

test('default', t => {
	t.true(pokemon.all().length > 0);
	t.truthy(pokemon.random());
	t.not(pokemon.random(), pokemon.random());
	t.is(pokemon.getName(143), 'Snorlax');
	t.is(pokemon.getId('Snorlax'), 143);
});

test('.languages', t => {
	t.true(pokemon.languages.has('en'));
	t.true(pokemon.languages.has('de'));
});

test('get all English names', testAll, 'en', [
	'Bulbasaur',
	'Ivysaur',
	'Venusaur'
]);

test('get all German names', testAll, 'de', [
	'Bisasam',
	'Bisaknosp',
	'Bisaflor'
]);

test('get English name by ID', testNames, 'en', [
	'Bulbasaur',
	'Bibarel',
	'Volcanion'
]);

test('get English name by ID (when no language code is given)', testNames, undefined, [
	'Bulbasaur',
	'Bibarel',
	'Volcanion'
]);

test('get French name by ID', testNames, 'fr', [
	'Bulbizarre',
	'Castorno',
	'Volcanion'
]);

test('get German name by ID', testNames, 'de', [
	'Bisasam',
	'Bidifas',
	'Volcanion'
]);

test('get Simplified Chinese name by ID', testNames, 'zh-Hans', [
	'妙蛙种子',
	'大尾狸',
	'波尔凯尼恩'
]);

test('get Traditional Chinese name by ID', testNames, 'zh-Hant', [
	'妙蛙種子',
	'大尾狸',
	'波爾凱尼恩'
]);

test('Get Japanese name by ID', testNames, 'ja', [
	'フシギダネ',
	'ビーダル',
	'ボルケニオン'
]);

test('get Korean name by ID', testNames, 'ko', [
	'이상해씨',
	'비버통',
	'볼케니온'
]);

test('get Russian name by ID', testNames, 'ru', [
	'Бульбазавр',
	'Бибарел',
	'Вулканион'
]);

test('get ID by English name', testIDs, 'en', [
	'Bulbasaur',
	'Bibarel',
	'Volcanion'
]);

test('get ID by German name', testIDs, 'de', [
	'Bisasam',
	'Bidifas',
	'Volcanion'
]);

test('get English random name (when no language code is given)', testRandom, undefined, pokemon.random());
test('get English random name', testRandom, 'en', pokemon.random('en'));
test('get German random name', testRandom, 'de', pokemon.random('de'));
