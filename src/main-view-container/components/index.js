'use strict';

var angular = require('angular');

module.exports = angular.module('movies-origanizer.main-view.components', [
])

.directive('itemSearcher', require('./ItemSearcher.directive'))
.directive('item', require('./Item.directive'))

.name;