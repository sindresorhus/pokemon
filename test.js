import test from 'ava';
import m from './';

function testAll(t, lang, expectedNames) {
	t.deepEqual(m.all(lang).slice(0, 3), expectedNames);
}

function testNames(t, lang, expectedNames) {
	t.is(m.getName(1, lang), expectedNames[0]);
	t.is(m.getName(400, lang), expectedNames[1]);
	t.is(m.getName(721, lang), expectedNames[2]);
}

function testIDs(t, lang, actualNames) {
	t.is(m.getId(actualNames[0], lang), 1);
	t.is(m.getId(actualNames[1], lang), 400);
	t.is(m.getId(actualNames[2], lang), 721);
}

function testRandom(t, lang, expectedName) {
	t.true(m.all(lang).indexOf(expectedName) !== -1);
}

test('default', t => {
	t.true(m.all.length > 0);
	t.truthy(m.random());
	t.not(m.random(), m.random());
	t.is(m.getName(143), 'Snorlax');
	t.is(m.getId('Snorlax'), 143);
});

test('.languages', t => {
	t.true(m.languages.has('en'));
	t.true(m.languages.has('de'));
});

test('Get all English names', testAll, 'en', [
	'Bulbasaur',
	'Ivysaur',
	'Venusaur'
]);

test('Get all German names', testAll, 'de', [
	'Bisasam',
	'Bisaknosp',
	'Bisaflor'
]);

test('Get English name by ID', testNames, 'en', [
	'Bulbasaur',
	'Bibarel',
	'Volcanion'
]);

test('Get English name by ID (when no language code is given)', testNames, undefined, [
	'Bulbasaur',
	'Bibarel',
	'Volcanion'
]);

test('Get French name by ID', testNames, 'fr', [
	'Bulbizarre',
	'Castorno',
	'Volcanion'
]);

test('Get German name by ID', testNames, 'de', [
	'Bisasam',
	'Bidifas',
	'Volcanion'
]);

test('Get Simplified Chinese name by ID', testNames, 'zh-Hans', [
	'妙蛙种子',
	'大尾狸',
	'波尔凯尼恩'
]);

test('Get Traditional Chinese name by ID', testNames, 'zh-Hant', [
	'妙蛙種子',
	'大尾狸',
	'波爾凱尼恩'
]);

test('Get Japanese name by ID', testNames, 'ja', [
	'フシギダネ',
	'ビーダル',
	'ボルケニオン'
]);

test('Get Korean name by ID', testNames, 'ko', [
	'이상해씨',
	'비버통',
	'볼케니온'
]);

test('Get Russian name by ID', testNames, 'ru', [
	'Бульбазавр',
	'Бибарел',
	'Вулканион'
]);

test('Get ID by English name', testIDs, 'en', [
	'Bulbasaur',
	'Bibarel',
	'Volcanion'
]);

test('Get ID by German name', testIDs, 'de', [
	'Bisasam',
	'Bidifas',
	'Volcanion'
]);

test('Get English random pokemon name (when no language code is given)', testRandom, undefined, m.random());

test('Get English random pokemon name', testRandom, 'en', m.random('en'));

test('Get German random pokemon name', testRandom, 'de', m.random('de'));
