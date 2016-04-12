'use strict';

module.exports = MainViewRouteConfig;

/* @ngInject */
function MainViewRouteConfig($routeProvider) {
	$routeProvider.when('/main', {
		template: require('./MainViewRoute.tpl.html'),
		controller: MainViewRouteController,
		controllerAs: 'vm'
	});
}

/* @ngInject */
function MainViewRouteController() {
	//var vm = this;


	///////


	/////// PUBLIC FUNCTIONS


	/////// PRIVATE FUNCTIONS

	
}
