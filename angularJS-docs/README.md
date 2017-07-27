# ANGULARJS

## Overview
Here's a set of general concepts into angularjs environment which you need to know before we begin:

> AngularJS's HTML **$compiler** allows the developer to teach the browser new HTML syntax. The compiler allows you to attach behavior to any HTML element
or attribute and even create new HTML elements or attributes with custom behavior.

>You can think of a **module** as a container for the different parts of your app – controllers, services, filters, directives, etc. You have to be careful when you used 'cause sometimes people have the error to declare multiples times maybe for the confussion between declare & invoque a module.

```javascript
   //declare a new module
   angular.module('softtekdemo', []);

   //invoque/reference to module
   angular.module('softtekdemo');
```

 >**$scope** is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.

 >AngularJS supports Single Page Application via multiple views on a single page. To do this AngularJS has provided **ng-view** and **ng-template** [directives](#directives) and *$routeProvider* services.

 >By the way **MVC** components in angular:

>- Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties are accessed through bindings.
>- View — The template (HTML with data bindings) that is rendered into the View.
>- Controller — The ngController directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values

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

**Exercise 1:** Make your own controller for login handle & show a list of user according some basic crendentials logic. Try by yourself at first place dowloading the [esqueleton project](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/0/), working there and them see the [exercise sample solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/1/) to check your result. Some considerations.

1. To implement the list of users you have to take a look in [Some Directives Pre-defined](#some-directives-predefined) topic; particularly in the **ng-repeat** & **ng-click** directive.

>**To execute the example just download this repository and then, in your terminal, type in their correct path:**

> **$> npm start**

## Directives

Directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile)
to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

NORMALIZATION: AngularJS normalizes an element's tag and attribute name to determine which elements match which directives. We typically refer to directives by
their case-sensitive camelCase normalized name (e.g. ngModel).

1. Strip x- and data- from the front of the element/attributes. (ng-model & data-ng-model is the same)
2. Convert the :, -, or _ delimited name to camelCase.

we say an element matches a directive when the directive is part of its declaration.

### Some Directives Predefined

- The **ngIf** directive removes or recreates a portion of the DOM tree based on an {expression}. If the expression assigned to ngIf evaluates to a false value then the element is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.
```html
<element ng-if="expression"></element>
```

- The **ngApp** directive tells AngularJS that this is the root element of the AngularJS application. Here is the bridge between visual deposit & modules. All AngularJS applications must have a root element. You can only have one ng-app directive in your HTML document. If more than one ng-app directive appears, the first appearance will be used. In this case mainApp is the name of module.

```html
<div ng-app = "mainApp">
   ...
   <div ng-view></div>

</div>
```

- **ngView** tag simply creates a place holder where a corresponding view (html or ng-template view) can be placed based on the configuration.

```html
<div ng-app = "mainApp">
   ...
   <div ng-view></div>

</div>
```

- **ngTemplate** in the other hand ussually it's used to define a visual space to deposit additional visual content on the view container.

```html
<div ng-app = "mainApp">
   ...

   <script type = "text/ng-template" id = "addStudent.htm">
      <h2> Add Student </h2>
      {{message}}
   </script>

</div>
```

- The **ngController** directive attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the Model-View-Controller design pattern.
```html
<element ng-controller="NameController">
   ...
</element>
```

- The **ngRepeat** directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.
```html
<element ng-repeat="item in collection">
   {{item}}
</element>
```

- The **ngClick** directive tells AngularJS what to do when an HTML element is clicked.

```html
<element ng-click="functionToCall()"></element>
```

- The **ngModel** directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

```html
<element ng-model="scope_variable"></element>
```

ngModel is responsible for:

1. Binding the view into the model, which other directives such as input, textarea or select require.
2. Providing validation behavior (i.e. required, number, email, url).
3. Keeping the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors).
4. Setting related css classes on the element (ng-valid, ng-invalid, ng-dirty, ng-pristine, ng-touched, ng-untouched, ng-empty, ng-not-empty) including animations.



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

>## Types of Bindings in Directives & Components

>- = : This serves to deliver a reference to an object. So whatever is being delivered is shared between components
>- @ : This serves to deliver a value. No binding of any kind
>- < : This is used for 1 way binding. The father transfers the child a value, but even if the child changes the new value does not travel to the father. However, if the father changes it, it does change in the child.
>- & : The latter alternative allows you to send a pointer to a function

[See examples of directives](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/directive.md)

**Exercise 2:** In the last section, you made a controller with a list of user functionality. Now It's time to separate that logic (just that logic) of the cotroller and create a directive of type 'E'. Some conditios for this:

1. First we are going to change the logical we did in our controller, now the login logic will be replace by add credentials functionality into our array of objects (name/pass) inside the controller (you have to add logical for prevent repetition in the name of new credentials)
2. Create a folder inside the folder app called directives and then another folder (user_list) inside directives
3. Create new files (userList.js & userLit.html) for you directive into folder user_list
4. When you declare your directive don't forget to include scope params to pass to our directive. include for now this
5. Remove for our controller the displayable list of users and put it into new directive (userList)

Use your project of the exercise 1 to start, then see the [exercise sample solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/2/) to check your result.

## Components

In AngularJS, a Component is a special kind of directive that uses a simpler configuration which is suitable for a component-based application structure.

This makes it easier to write an app in a way that's similar to using Web Components or using the new Angular's style of application architecture.

Advantages of Components:

- Simpler configuration than plain directives
- Promote sane defaults and best practices
- Optimized for component-based architecture
- Writing component directives will make it easier to upgrade to Angular

[See the example of component](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/component.md)

**Exercise 3:** Now It's component creation time!. Here, we are going to build a new component (we are not modify the directive beceause we want both of them for comparison purpose). The component consist in make the edition functionality for our list of users. So it means the component needs to have a view where we can edit a single credential when we click on the element and then, the view component will be display. We have to consider the same validation rule in our edit component (while you are editing, elements with the same name are forbiden). Some considerations for the exercise:

1. Create a folder called components into app folder
2. Create folder called user_edit into components folder and then inside of user_edit put your required files for the component (userEdit.js, userEdit.html)
3. Use ngIf to hide/show component according basic logical of edition
4. You will have to modify userList to get access to the click event listener and retrieve the current user model selected to send to our component binding. The goal is use callback methods into the binding (&) of userList. Now when you have already the callback method binding inside of directive you have to set a scope variable (currentUser) in the controller to  send by one way binding (<) that variable to our new component and we finish.

Use your project of the exercise 2 to start, then see the [exercise sample solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/3/) to check your result.


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

As we know, a service is a method on our module that takes a name and a function that defines the service and in the same way a factory is a method on our module and it also takes a name and a function, that defines the factory. We can inject and use that thing exactly at the same way we did with the service. Now what is the difference here?

Well, you might see that instead of working with this in the factory, we’re returning an object literal. Why is that? It turns out, a service is a constructor function whereas a factory is not.

[See example of Factory](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/factory.md)

**Exercise 4:** In this part we are going to modify again our previous exercise. Do you remember our array of users stored in the controller? Well It's time to move to a properly site, that magic place is a factory. Why a factory against service? [here's the reason](#factory-vs-services).

So the exercise consist in move the provider of data (array of users) into our factory. Some considerations:

1. Create a folder inside app called services
2. Create a js file insider services (userServices.js)
3. Try to simulate a http request doing an async method to handle errors promises (clue: you can use $q todo that)  
4. Use if you can, the get-XXX name method convention in the factory (optional)
5. Begin to change some methods to ecmascript way in your app.js & userservices.js (optional)

Use your project of the exercise 3 to start, then see the [exercise sample solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/4/) to check your result.

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

>**Deprecation Notice**: In an effort to keep synchronized with router changes in the new Angular, this implementation of the Component Router (ngComponentRouter module) has been deprecated and will not receive further updates. We are investigating backporting the new Angular Router to AngularJS, but alternatively, use the ngRoute module or community developed projects (e.g. ui-router). [See info](https://docs.angularjs.org/guide/component-router).

### Router with ui-router API

**ui-router** is the defacto standard for routing in AngularJS. Influenced by the core angular router $route and the Ember Router, UI-Router has become the standard choice for routing non-trivial apps in AngularJS (1.x). Support properly well the component routing.

To use ui-router in our index.html we have to change the container element with the **ng-view** directive for a new element:

```html
<div ng-app='softtekdemo'>
  <ui-view></ui-view>
</div>
```

Then in the app.js or other file where our root module was configure, we have to put this new configuration & remove old configuration if exist ($routerprovider).

```javascript
"use strict";

var demo = angular.module('softtekdemo', ['ui.router']);

demo.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('someComponentOr Directive', {
      url: '/blah/:parameter',
      template: './templates/template.html',
      controllerAs: "ctrl",
      controller: function ($scope, $stateParams, myService) {
        this.parameter = myService.getUser($stateParams.parameter)
      }
    })

    .state('main', {
      url: '/',
      templateUrl : "./templates/main.html"
    })

    $urlRouterProvider.otherwise('/main');
  })
```


**Exercise 5:** Modifying my files again? No way, but we have to. So here's the thing; In all the previous exercises we working directly on index.html to display our components & directives. Now It's time to put order and that's exactly where routes enter. Some considerations:

1. Obviously we have to remove some stuffs of index.html & app.js and distribute in properly places
2. We have a big deal here, 'cause we have two different Schemes in our app (directives & components). What's the big deal? When you try to use routes with a combinations of directives & components the $routerprovider is not enougth to attendant the components routes. So in this case to fix this problem we are going to use ui-router as our routing system.
3. Create a folder inside app called templates
4. Create a file inside templates called main.html. Put all elements that are previously in the tag ```<div ng-controller="SofttekCtrl">``` except the edition-user component tag.
5. Create a new file inside templates folder called userEdition.html, Put your edition-user component tag only.
6. Create two routes through $stateProvider (ui-router), one for our main template as our root router (/), and the second route for our component (here you most be careful 'cause you have to take in mind which exist binding parameter for this component), the clue is used combination of controller with $stateParams in the configuration of the route.
7. Now in the index.html remove all children tags from ```<div ng-app='softtekdemo'> ```and put just the **ui-view** tag.
8. Modify your bower.json adding **"angular-ui-router": "*"**  to your dependencies.
9. Include the properly script path ui-router to your index.html

Use your project of exercise 4 to start, then see the [exercise sample solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/5/) to check your result.

## Angular Material

AngularJS Material is both a UI Component framework and a reference implementation of Google's Material Design Specification. This project provides a set of reusable, well-tested, and accessible UI components based on Material Design. Material Design is a specification for a unified system of visual, motion, and interaction design that adapts across different devices and different screen sizes. To use this set of components we need to include into an angular-cli project just importing npm install material dependencies.

## Bibliography

1. https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html
2. https://docs.angularjs.org/guide/
3. https://www.w3schools.com/angular/angular_routing.asp
4. http://tutorials.jenkov.com/angularjs/routes.html
5. https://desarrolloweb.com/articulos/bindings-componentes-angularjs.html
