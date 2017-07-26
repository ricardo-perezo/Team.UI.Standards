"use strict";

var demo = angular.module('softtekdemo', []);

demo.controller("SofttekCtrl", function($scope){
    $scope.name = 'Softtek-demo';
    $scope.pass = "";

    $scope.userList = [
        {
            name: "uriel.carballido@softtek.com",
            pass: "softtek"
        },
        {
            name: "jacqueline.romero@softtek.com",
            pass: "softtek"
        },
        {
            name: "ricardo.lopez@softtek.com",
            pass: "softtek"
        }
    ]

    $scope.checkRepeatedCredentials = function(name, pass, arr) {
        var res = false
        angular.forEach(arr, function(user) {
          res = (user.name == name)
        });
        return res
    }

    $scope.addUser = function() {
        if ($scope.name  && $scope.pass && !$scope.checkRepeatedCredentials($scope.name, $scope.pass, $scope.userList))
            $scope.userList.push({name: $scope.name, pass: $scope.pass})
    }


});
