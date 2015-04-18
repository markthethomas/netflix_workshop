'use strict';

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(item => results.push(projectionFunction(item)));
	return results;
};
