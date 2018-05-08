'use strict';

const bud = require('./index.js');

const user = 'iama_rishi';

const check = (usr, opt) => {
	return bud(usr, opt).then(res => {
		console.log(' ' + opt + ' : ' + res.data + ' \n ');
	});
};

check(user, 'id');
check(user, 'fullname');
check(user, 'username');
check(user, 'bio');
check(user, 'externalUrl');
check(user, 'linkshimmed');
check(user, 'posts');
check(user, 'followers');
check(user, 'following');
check(user, 'private');
check(user, 'verified');
check(user, 'connected');
