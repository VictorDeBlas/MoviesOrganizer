'use strict';

var angular = require('angular');

module.exports = angular.module('moviesOrganizer', [

	require('./main-view-container'),

	require('ui-select'),
	require('angular-ui-bootstrap'),
	require('angular-route')
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/main'
	});
})

.name;
