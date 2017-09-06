This is an example of a unit test of factory in ANGULARJS

```javascript
// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('Users factory', function() {
  var UserService;

  // Before each test load our softtekdemo module
  beforeEach(module('softtekdemo'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_UserService_) {
    //console.log(_UserService_)
    UserService = _UserService_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(UserService).toBeDefined();
  });

  describe('.getUsers()', function() {
    it('should exist', function() {
      expect(UserService.getUsers).toBeDefined();
    });
  });

  describe('.getUser()', function() {
    it('Check if getUser Method returns properly object by key', function() {
      expect(UserService.getUser('uriel.carballido@softtek.com')).toEqual({
          name: "uriel.carballido@softtek.com",
          pass: "softtek"
      });
    });
  });


});

```
