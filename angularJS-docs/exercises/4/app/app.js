"use strict";

var demo = angular.module('softtekdemo', []);

demo.controller("SofttekCtrl", function($scope, UserService){
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
        console.log("edit user::", $scope.currentUser)
    }

    $scope.addUser = function() {
        if ($scope.name  && $scope.pass && !$scope.checkRepeatedCredentials($scope.name, $scope.pass, $scope.userList))
            $scope.userList.push({name: $scope.name, pass: $scope.pass})
    }


});
