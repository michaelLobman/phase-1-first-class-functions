function receivesAFunction(callback) {
	return callback();
}

function namedFunction() {
	return 'This is a named function';
}

function returnsANamedFunction() {
	return namedFunction
}

function returnsAnAnonymousFunction() {
	return function() {
		return 1+1;
	}
}