import test from 'ava';
import m from './';

test(t => {
	t.true(m.all.length > 0);
	t.truthy(m.random());
	t.not(m.random(), m.random());
	t.is(m.all[0], 'Bulbasaur');
	t.is(m.all[1], 'Ivysaur');
	t.is(m.getName(143), 'Snorlax');
	t.is(m.getId('Snorlax'), 143);
});

test('English names', t => {
	t.is(m.getName(1), 'Bulbasaur');
	t.is(m.getName(100), 'Voltorb');
	t.is(m.getName(200), 'Misdreavus');
	t.is(m.getName(300), 'Skitty');
	t.is(m.getName(400), 'Bibarel');
	t.is(m.getName(500), 'Emboar');
	t.is(m.getName(600), 'Klang');
	t.is(m.getName(700), 'Sylveon');
	t.is(m.getName(721), 'Volcanion');
});

test('German names', t => {
	t.is(m.getName(1, 'de'), 'Bisasam');
	t.is(m.getName(100, 'de'), 'Voltobal');
	t.is(m.getName(200, 'de'), 'Traunfugil');
	t.is(m.getName(300, 'de'), 'Eneco');
	t.is(m.getName(400, 'de'), 'Bidifas');
	t.is(m.getName(500, 'de'), 'Flambirex');
	t.is(m.getName(600, 'de'), 'Kliklak');
	t.is(m.getName(700, 'de'), 'Feelinara');
	t.is(m.getName(721, 'de'), 'Volcanion');
});

test('Indices can be used with language codes', t => {
	t.is(m.getId('Snorlax'), 143);
	t.is(m.getId('Relaxo', 'de'), 143);
});

test('Language fallback is English', t => {
	const snorlaxId = 143;
	const snorlaxEnglish = 'Snorlax';

	t.is(m.getId(snorlaxEnglish), snorlaxId);
	t.is(m.getId(snorlaxEnglish, 'en'), snorlaxId);

	t.is(m.getName(snorlaxId), snorlaxEnglish);
	t.is(m.getName(snorlaxId, 'en'), snorlaxEnglish);
});
