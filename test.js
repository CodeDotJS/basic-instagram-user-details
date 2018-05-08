import test from 'ava';
import fn from './';

const user = '9gag';

test('userid', async t => {
	const bud = await fn(user, 'id');

	t.is(bud.data, `259220806`);
});

test('fullname', async t => {
	const bud = await fn(user, 'fullname');

	t.is(bud.data, `9GAG: Go Fun The World`);
});

test('username', async t => {
	const bud = await fn(user, 'username');

	t.is(bud.data, `9gag`);
});

test('bio', async t => {
	const bud = await fn(user, 'bio');

	t.is(bud.data, '🔉9GAG Fun Off video contest is BACK!\\nSubmit your funny videos to the link below to win $100,000:');
});

test('externalUrl', async t => {
	const bud = await fn(user, 'externalUrl');

	t.is(bud.data, `http://funoff.9gag.com/`);
});

test('linkshimmed', async t => {
	const bud = await fn(user, 'linkshimmed');

	t.is(bud.data, bud.data);
});

test('posts', async t => {
	const bud = await fn(user, 'posts');

	t.is(bud.data, `16041`);
});

test('followers', async t => {
	const bud = await fn(user, 'followers');

	t.is(bud.data, bud.data);
});

test('following', async t => {
	const bud = await fn(user, 'following');

	t.is(bud.data, `26`);
});

test('private', async t => {
	const bud = await fn(user, 'private');

	t.is(bud.data, `false`);
});

test('verified', async t => {
	const bud = await fn(user, 'verified');

	t.is(bud.data, `true`);
});

test('connected', async t => {
	const bud = await fn(user, 'connected');

	t.is(bud.data, `null`);
});

