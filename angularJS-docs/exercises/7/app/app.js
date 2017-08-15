"use strict";

angular.module('softtekdemo', ['ui.router'/*,'ngMaterial'*/])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('userEdition', {
      url: '/users/:user',//{user: json}',
      templateUrl: './templates/userEdition.html',
      controllerAs: "ctrl",
      controller: function ($scope, $stateParams, UserService) {
        this.user = UserService.getUser($stateParams.user)
        console.log($stateParams.user, this.user)
      }
    })

    .state('main', {
      url: '/',
      templateUrl : "./templates/main.html",
      controller: 'SofttekCtrl'
    })

    $urlRouterProvider.otherwise('/');
})

/*.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
})*/

.controller("SofttekCtrl", function($scope, UserService, $state){
    $scope.name = 'Softtek-demo';
    $scope.pass = "";
    $scope.currentUser = undefined

    $scope.retrieveUsers = function() {
        UserService.getUsers().then((users) => {
            $scope.userList = users
        })
    }()



    $scope.checkRepeatedCredentials = function(name, pass, arr) {
        var res = false
        angular.forEach(arr, (user) => {
          res = (user.name == name)
        });
        return res
    }

    $scope.editUser = function(user) {
        $scope.currentUser = user.user
        $state.go('userEdition', {user: $scope.currentUser.name})
    }

    $scope.addUser = function() {
        if ($scope.name  && $scope.pass && !$scope.checkRepeatedCredentials($scope.name, $scope.pass, $scope.userList))
            $scope.userList.push({name: $scope.name, pass: $scope.pass})
    }


});
