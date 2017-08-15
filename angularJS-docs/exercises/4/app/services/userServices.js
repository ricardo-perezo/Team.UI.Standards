angular.module('softtekdemo')

.factory("UserService", function($q) {
  var users = [
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

  return {
    getUsers: function() {
      return $q.when(users)
    }
  };
});
