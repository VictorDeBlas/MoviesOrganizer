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
			type: '@',
			options: '='
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
			controllerAs: 'vm',
			openedClass: vm.type === 'movies' ? 'movies-modal' : ''
		});
	}

	function changeOrder() {
		vm.isOrdered = !vm.isOrdered;
		vm.reverse = !vm.reverse;
	}



	/////////////// PRIVATE FUNCTIONS

	function ModalController() {
		var modalScope = this;

		modalScope.type = vm.type;
		modalScope.isSaving = false;
		modalScope.options = vm.options;

		modalScope.save = save;
		modalScope.close = close;
		modalScope.buttonActivated = buttonActivated;

		function save() {
			var element;

			modalScope.isSaving = true;

			element = {
				name: modalScope.newName
			};

			if ( vm.type === 'movies' ) {
				element.genre = modalScope.genreSelected;
				for ( var i = 0; i < vm.options.length; i++ ) {
					if ( vm.options[i].name === modalScope.genreSelected ) {
						vm.options[i].total += 1;
						break;
					}
				}
			} else if ( vm.type === 'genres' ) {
				element.total = 0;
			}

			vm.items.push(element);

			setTimeout( function() {
				modalScope.isSaving = false;
				modal.close();
			}, 750);
		}

		function buttonActivated() {
			if ( vm.type === 'movies' && !modalScope.genreSelected ) {
				return true;
			} else {
				return false;
			}
		}

		function close() {
			modalScope.newName = null;
			modal.close();
		}
	}
}



