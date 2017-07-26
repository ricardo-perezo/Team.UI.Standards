## Example: Create New Directive Tag

```html
<!-- Example 1 -->
<softtek-directive></softtek-directive>
```
```javascript
//example 1
var app = angular.module("myApp", []);
app.directive("softtekDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});

```

```html
<!-- Example 2 -->
<directive-name data="hi softtek"></directive-name>
```

```javascript

//example 2
angular.module("myApp")
.directive("directiveName", function(){
  return {
      restrict:'E',
      transclude:true,
      template:'<div class="title"><h2>{{title}}</h3></div>',
      scope:{
        data:"@"
      },
      replace:true
  };
})

```
