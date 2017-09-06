"use strict";

var demo = angular.module('softtekdemo');
demo.directive('userList', function($parse) {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        templateUrl: './directives/user_list/userList.html',
        scope: {
          list: "=",
          editUser: '&'
        }
    }
});
