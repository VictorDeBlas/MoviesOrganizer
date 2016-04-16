'use strict';

module.exports = ItemDirective;

/* @ngInject */
function ItemDirective() {
	var directive = {
		restrict: 'E',
		template: require('./Item.tpl.html'),
		scope: {},
		controller: ItemController,
		controllerAs: 'vm',
		bindToController: {
			item:'=',
			type:'='
		},
	};
	return directive;
}

/* @ngInject */
function ItemController() {
	//var vm = this;
}

