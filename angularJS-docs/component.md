## Example of Component

To Start you have to decide the structure of your project when you working with components. In other words you decide if you create folder/subfolders for each component, group by module, etc. To show only how components works we are going to use plain structure.

```javascript
// myComponent.js
angular.module('myApp').component('myComponent', {
  templateUrl: 'myComponent.html',
  bindings: {
    data: '<'
  }
});
```

```html
// myComponent.html
<span>Name: {{$ctrl.data}}</span>
```

Now to use the component we have to write the tag in the html that we want to use in the new component. (Check the convention between js camelCase and html)

```html
// index.html
<my-component data="hi Softtek"></my-component>
```
