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
			type: '='
		},
	};
	return directive;
}

/* @ngInject */
function ItemSearcherController($uibModal) {
	var vm = this;

	vm.add = add;

	///////////////

	function add() {
		var modal;

		modal = $uibModal.open({
			templateUrl: 'src/main-view-container/components/Modal.tpl.html',
			controller: function() {
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
					}, 1000);

				}

				function close() {
					modalScope.newName = null;
					modal.close();
				}
			},
			controllerAs: 'vm'
		});
	}
}

