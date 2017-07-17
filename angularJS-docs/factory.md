# Example of factory

```html
//UserFactory.js
angular.module("myApp", [])

.factory("UserFactory", function() {
  var users = [
    {
      user:"uriel.carballido@softtek.com",
      pass: "softtek"
    },
    {
      user:"jacqueline.romero@softtek.com",
      pass: "softtek2"
    }
  ];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    },
    login: function(email, pass) {
      angular.forEach(users, function(user) {
        if(user.user== email && user.pass == pass) return true
      });
      return false
    }
  };
});
```
