"use strict";

var demo = angular.module('softtekdemo', []);

demo.controller("SofttekCtrl", function($scope){
    $scope.name = 'Softtek-demo';
    $scope.pass = ""; 

    $scope.userList = []

    $scope.login = function() {
        if ($scope.name  && $scope.pass) {
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
        } else $scope.userList = []
    }


});
