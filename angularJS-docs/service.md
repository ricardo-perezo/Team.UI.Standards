# Example of service

//UserServices.js
angular.module("myApp", [])

.service("UserService", ['$scope', function($scope) {
  $scope.users = [
    {
      user:"uriel.carballido@softtek.com",
      pass: "softtek"
    },
    {
      user:"jacqueline.romero@softtek.com",
      pass: "softtek2"
    }
  ];

  $scope.all = function() {
    return $scope.users;
  }

  $scope.first = function() {
    return $scope.users[0];
  }

  $scope.login = function(email, pass) {
    angular.forEach(users, function(user) {
      if(user.user== email && user.pass == pass) return true
    });
    return false
  }
}]);
