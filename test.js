import test from 'ava';
import m from './';

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

test(t => {
	t.true(m.all.length > 0);
	t.truthy(m.random());
	t.not(m.random(), m.random());
	t.is(m.all[0], 'Bulbasaur');
	t.is(m.all[1], 'Ivysaur');
	t.is(m.getName(143), 'Snorlax');
	t.is(m.getId('Snorlax'), 143);
});

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

test('Get Chinese name by ID', testNames, 'zh', [
	'妙蛙种子',
	'大尾狸',
	'ボルケニオン'
]);

test('Get Japanese name by ID', testNames, 'ja', [
	'フシギダネ',
	'ビーダル',
	'ボルケニオン'
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
