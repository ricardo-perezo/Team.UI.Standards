# ANGULARJS

Here's a set of general concepts into angularjs environment which you need to know before we begin:

> AngularJS's HTML **$compiler** allows the developer to teach the browser new HTML syntax. The compiler allows you to attach behavior to any HTML element
or attribute and even create new HTML elements or attributes with custom behavior.

>The **ng-app** directive tells AngularJS that this is the root element of the AngularJS application.

>All AngularJS applications must have a root element. You can only have one ng-app directive in your HTML document. If more than one ng-app directive appears, the first appearance will be used.

```html
<div ng-app = "mainApp">
   ...
   <div ng-view></div>

</div>
```

>AngularJS supports Single Page Application via multiple views on a single page. To do this AngularJS has provided **ng-view** and **ng-template** [directives](## Directives) and *$routeProvider* services.

>**ng-view** tag simply creates a place holder where a corresponding view (html or ng-template view) can be placed based on the configuration.

```html
<div ng-app = "mainApp">
   ...
   <div ng-view></div>

</div>
```

>**ng-template** in the other hand ussually it's used to define a visual space to deposit additional visual content on the view container, you can declare like this:

```html
<div ng-app = "mainApp">
   ...

   <script type = "text/ng-template" id = "addStudent.htm">
      <h2> Add Student </h2>
      {{message}}
   </script>

</div>  
 ```

 >**$scope** is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.

## Controllers

 Is defined by a JavaScript constructor function that is used to augment the AngularJS Scope. When a Controller is attached to the DOM via the
 ng-controller directive, AngularJS will instantiate a new Controller object, using the specified Controller's constructor function. A new child
 scope will be created and made available as an injectable parameter to the Controller's constructor function as $scope.

 Use controllers to:

* Set up the initial state of the $scope object.
* Add behavior to the $scope object.

Do not use controllers to:

* Manipulate DOM: Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability.
 AngularJS has databinding for most cases and directives to encapsulate manual DOM manipulation.
* Format input: Use AngularJS form controls instead.
* Filter output: Use AngularJS filters instead.
* Share code or state across controllers: Use AngularJS services instead.
* Manage the life-cycle of other components (for example, to create service instances).

```html
<div ng-app="myApp" ng-controller="myCtrl">

First Name: <input type="text" ng-model="firstName"><br>
Last Name: <input type="text" ng-model="lastName"><br>
<br>
Full Name: {{firstName + " " + lastName}}

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
</script>
```

**Exercise 1:** Make your own controller for login handle & show a list of user according some crendentials logic basic. Try for yourself at first place dowloading the [esqueleton project](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/0/), working there and them see the [exercise example solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/1/) to check your result.

>**To execute the example just download for this repository and then in your terminal type in their correct path $> npm start, if you have some import error in your web console, just drag & drop bower_components folder inside app folder if that folder is out of it.**

## Directives

Directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile)
to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

NORMALIZATION: AngularJS normalizes an element's tag and attribute name to determine which elements match which directives. We typically refer to directives by
their case-sensitive camelCase normalized name (e.g. ngModel).

1. Strip x- and data- from the front of the element/attributes. (ng-model & data-ng-model is the same)
2. Convert the :, -, or _ delimited name to camelCase.

we say an element matches a directive when the directive is part of its declaration.

### Restrict Types in Directives

The restrict option is used to specify how a directive can be invoked on the page. $compile can match directives based on element names (E), attributes (A), class names (C), and comments (M).

- A :
```html
<span softtek-directive></span>
```

- E :
```html
<softtek-directive></softtek-directive>
```

- C :
```html
<span class="softtek-directive"></span>
```
- M :
```html
<!-- directive: softtek-directive -->
```

[See the example of directives](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/directive.md)

**Exercise 2:** Make your own directives of A & E types. Try for yourself at first place and them see the [exercise example](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/2/) to check your result.

## Components

In AngularJS, a Component is a special kind of directive that uses a simpler configuration which is suitable for a component-based application structure.

This makes it easier to write an app in a way that's similar to using Web Components or using the new Angular's style of application architecture.

Advantages of Components:

-Simpler configuration than plain directives
-Promote sane defaults and best practices
-Optimized for component-based architecture
-Writing component directives will make it easier to upgrade to Angular

### Types of Bindings in Components

- = : This serves to deliver a reference to an object. So whatever is being delivered is shared between components
- @ : This serves to deliver a value. No binding of any kind
- < : This is used for 1 way binding. The father transfers the child a value, but even if the child changes the new value does not travel to the father. However, if the father changes it, it does change in the child.
- & : The latter alternative allows you to send a pointer to a function

[See the example of component](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/component.md)

## Directives vs Components

When not to use Components:

-For directives that need to perform actions in compile and pre-link functions, because they aren't available
-When you need advanced directive definition options like priority, terminal, multi-element
-When you want a directive that is triggered by an attribute or CSS class, rather than an element

Available options for Directives(D) and Components(C)

Available attribute-Directives |  Directives | Components
--------|-------------|-----------
bindings | | Yes (binds to controller)                         
bindToController | Yes (Default: false) | 	                  
compile function | Yes |	                 
controller | Yes | Yes (default function() {})                       
controllerAs | Yes (default: false) | Yes (default: $ctrl)	                     
link functions | Yes |	                   
multiElement | Yes |	                     
priority | Yes |                        
replace | Yes (deprecated) |	                            
require | Yes | Yes	                            
restrict | Yes | No (restricted to element only)	                         
scope | Yes (default: false) | No (scope is always isolate)	                               
template | Yes | Yes, injectable	                         
templateNamespace | Yes | No	                 
templateUrl | Yes | Yes, injectable                       
terminal | Yes |	                         
transclude | Yes (default: false) | Yes (default: false)                      

## Services
AngularJS services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.

AngularJS services are:
- Lazily instantiated: AngularJS only instantiates a service when an application component depends on it.
- Singletons: Each component dependent on a service gets a reference to the single instance generated by the service factory.

[See example of service](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/service.md)

### Consuming Services
For consuming services we need to prepare the view/template and the controller. To do that we have to binding the view element with a controller function for example as event.

```html
//view1.html
<div class="container">
     <form class="form-signin" role="form">
         <input type="email" class="form-control" ng-model="var1" placeholder="Email address" required="" autofocus="">
         <input type="password" class="form-control" ng-model="var2" placeholder="Password" required="">
         <label class="checkbox">
         <a href="#"> Sign Up</>
     </label>
     <button class="btn btn-lg btn-primary btn-block" ng-click="send()">Sign in</button>
   </form>
 </div>
```

 We Assumed controller is associated with this view throught $routeProvider, It means ng-controller on view is not needed. Now in the controller side we have to declare models, methods to handle events, etc. In this case we have have to pay attention to send() function in the ng-click directive of button in example.

 ```javascript
 //controller view1.js
 .controller('View1Ctrl', ['$scope', 'UserService', function($scope, UserService) {
   $scope.var1 = "angularjs@softtek.com"
   $scope.var2 = "softtek"

   $scope.send = function() {
     if(UserService.login($scope.var1, $scope.var2)) {
       alert("SUCESS!!")
     }
   }
 }]);
 ```

As we can see, throught inyection dependencies we can include any custom service (UserService) or existing ($http).

### Services Error Handling

In almost all scenarios errors in services born for poor validations in data or in the async request (promise). So in the first case we can use a simple try/catch sentence and handle error types there. The second scenery thanks to promise is relative easy to handle errors 'cause promise has a section dedicate to attendant errors. In the particular case of $http exist a block exclusive for handle errors:

```javascript
$http.get(url).success(function (data) {
  //some logical with data object
}).error(function(error) {
  //handle error
});
```

## Factory

When we know a service is a method on our module that takes a name and a function that defines the service and in the same way a factory is a method on our module and it also takes a name and a function, that defines the factory. We can inject and use that thing exactly the same way we did with the service. Now what is the difference here?

Well, you might see that instead of working with this in the factory, we’re returning an object literal. Why is that? It turns out, a service is a constructor function whereas a factory is not.

[See example of Factory](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/factory.md)

## Factory vs Services

Which one to use? basically Factories allows us to do some configuration stuff or conditionally create an object or not, which doesn’t seem to be possible when creating a service directly, which is why most resources recommend to use factories over services, but the reasoning is inappreciable.

But here's the fact, what happen if service send us an object like factory?. In this point we have the same condition and advantages like factory, so basically it depends how you implement your code and requirements.

## Router

AngularJS routes enables you to show different content depending on what route is chosen. A route is specified in the URL after the # sign. AngularJS ngRoute module provides routing, deep linking services and directives for angular applications. The ngRoute module routes your application to different pages without reloading the entire application. To enabled this functionality on your app is required include a div tag with the directive ngView to tell $compiler that div will be the container of all application.

> $routeProvider is the key service which set the configuration of urls, map them with the corresponding html page or ng-template, and attach a controller with the same.

```html
//index.html
<div ng-view></div>
```

```javascript
//app.js
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});
```

## Angular Material

AngularJS Material is both a UI Component framework and a reference implementation of Google's Material Design Specification. This project provides a set of reusable, well-tested, and accessible UI components based on Material Design. Material Design is a specification for a unified system of visual, motion, and interaction design that adapts across different devices and different screen sizes. To use this set of components we need to include into an angular-cli project just importing npm install material dependencies.

## Bibliography

1. https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html
2. https://docs.angularjs.org/guide/
3. https://www.w3schools.com/angular/angular_routing.asp
4. http://tutorials.jenkov.com/angularjs/routes.html
5. https://desarrolloweb.com/articulos/bindings-componentes-angularjs.html
