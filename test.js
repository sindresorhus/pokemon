import test from 'ava';
import m from './';

test(t => {
	t.true(m.all.length > 0);
	t.truthy(m.random());
	t.not(m.random(), m.random());
	t.is(m.all[1], 'Bulbasaur');
	t.is(m.all[2], 'Ivysaur');
	t.is(m.getName(143), 'Snorlax');
	t.is(m.getId('Snorlax'), 143);
});
