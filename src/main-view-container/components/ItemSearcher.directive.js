'use strict';

module.exports = ItemSearcherDirective;

/* @ngInject */
function ItemSearcherDirective() {
	var directive = {
		restrict: 'E',
		template: require('./ItemSearcher.tpl.html'),
		scope: {},
		controller: ItemSearcherController,
		controllerAs: 'vm',
		bindToController: {
			items: '=',
			type: '@'
		},
	};
	return directive;
}

/* @ngInject */
function ItemSearcherController($uibModal) {
	var vm = this, modal;

	vm.isOrdered = false;
	vm.reverse = false;

	vm.add = add;
	vm.changeOrder = changeOrder;

	///////////////

	function add() {

		modal = $uibModal.open({
			templateUrl: 'src/main-view-container/components/Modal.tpl.html',
			controller: ModalController,
			controllerAs: 'vm'
		});
	}

	function changeOrder() {
		vm.isOrdered = !vm.isOrdered;
		vm.reverse = !vm.reverse;
	}



	/////////////// PRIVATE FUNCTIONS

	function ModalController() {
		var modalScope = this;

		modalScope.isSaving = false;

		modalScope.save = save;
		modalScope.close = close;

		function save() {
			modalScope.isSaving = true;

			vm.items.push({
				name:modalScope.newName,
				total: 0
			});
			setTimeout( function() {
				modalScope.isSaving = false;
				modal.close();
			}, 750);

		}

		function close() {
			modalScope.newName = null;
			modal.close();
		}
	}
}



