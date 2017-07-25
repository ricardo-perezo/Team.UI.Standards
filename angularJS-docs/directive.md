## Example: Create New Directive Tag

```html
<softtek-directive></softtek-directive>
```
```javascript
<script>
var app = angular.module("myApp", []);
app.directive("softtekDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
</script>
```
