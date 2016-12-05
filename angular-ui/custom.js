'use strict';

// module definition
var app = angular.module('App', ['ui.bootstrap']);

// controller defintion
app.controller('MainController', MainController);

// DI
MainController.$inject = ['$uibModal'];

// controller implementation
function MainController(Modal) {
  var vm = this;

  vm.people = [
    { name: 'Bruce', age: 29 },
    { name: 'Chris', age: 30 },
    { name: 'Dedrick', age: 28 },
    { name: 'Patrick', age: 29 },
    { name: 'Jonathan', age: 26 }
  ];

  // show modal  
  vm.show = function show(item) {
    Modal.open({
      ariaLabelledBy: 'ui-dialog-title',
      ariaDescribedBy: 'ui-dialog-body',
      templateUrl: './angular-ui/sample-modal.html',
      controller: 'ModalController',
      controllerAs: '$ctrl',
      size: 'lg',
      resolve: { 
        Item : function () { return item; }
      }
    });
  }

  // tabs 
  vm.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2' },
    { title:'Dynamic Title 3', content:'Dynamic content 3' }
  ];
}

// modal controller 
app.controller('ModalController', ModalController);

ModalController.$inject = ['$uibModalInstance', 'Item'];

function ModalController(Instance, Item) {
  var vm = this;
  vm.person = Item;
  vm.close  = Instance.close;
}
