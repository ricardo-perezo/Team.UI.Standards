"use strict";
angular.module('softtekdemo').component('userEdit', {
  templateUrl: './components/user_edit/userEdit.html',
  bindings: {
    user: '<'
  },
  controllerAs: 'ctrl'
});
