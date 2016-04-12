'use strict';

var angular = require('angular');

module.exports = angular.module('movies-organizer.main-view.routes', [

	require('angular-route'),
])

.config(require('./MainViewRoute.config'))

.name;