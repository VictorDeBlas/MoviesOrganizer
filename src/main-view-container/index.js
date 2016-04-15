'use strict';

var angular = require('angular');

module.exports = angular.module('movies-organizer.main-view-container', [

	require('./routes'),
	require('./components')
])

.name;