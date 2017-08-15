# ANGULARJS

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [ANGULARJS](#angularjs)
	- [Overview](#overview)
	- [Controllers](#controllers)
	- [Directives](#directives)
		- [Some Directives Predefined](#some-directives-predefined)
		- [Restrict Types in Directives](#restrict-types-in-directives)
	- [Components](#components)
	- [Directives vs Components](#directives-vs-components)
	- [Services](#services)
		- [Consuming Services](#consuming-services)
		- [Services Error Handling](#services-error-handling)
	- [Factory](#factory)
	- [Factory vs Services](#factory-vs-services)
	- [Router](#router)
		- [Router with ui-router API](#router-with-ui-router-api)
	- [Angular Material](#angular-material)
	- [Unit Testing](#unit-testing)
	- [Design Patterns in angularJS](#design-patterns-in-angularjs)
		- [DP in Services](#dp-in-services)
			- [Singleton](#singleton)
			- [Factory Method](#factory-method)
			- [Decorator](#decorator)
			- [Facade](#facade)
			- [Proxy](#proxy)
			- [Active Record](#active-record)
			- [Intercepting Filters](#intercepting-filters)
		- [Directives](#directives)
			- [Composite](#composite)
			- [Interpreter](#interpreter)
			- [Template View](#template-view)
		- [Scope](#scope)
			- [Observer](#observer)
			- [Chain of Responsabilities](#chain-of-responsabilities)
			- [Command](#command)
		- [Controllers](#controllers)
			- [Page Controller](#page-controller)
	- [Best Practices](#best-practices)
		- [How to Use 'controllerAs' Sintax Properly?](#how-to-use-controlleras-sintax-properly)
		- [Writing Controllers as Classes](#writing-controllers-as-classes)
		- [How to Set Watch](#how-to-set-watch)
		- [Single Responsability](#single-responsability)
		- [Small Functions](#small-functions)
		- [Javascript Scopes](#javascript-scopes)
		- [Avoid Naming Collisions](#avoid-naming-collisions)
		- [Definitions (aka Setters)](#definitions-aka-setters)
		- [Bindable Members Up Top](#bindable-members-up-top)
	- [Bibliography](#bibliography)

<!-- /TOC -->


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

**Exercise 6:** In this exercise will be more free, [check the documentation of angularjs-material](https://material.angularjs.org/latest/getting-started) and try to use some components in the last version of your project. Some considerations:

1. Yo can install angular-material by bower or npm or use the cdn of google. For academic purposes we are going to use the last option. Just put in your index file:
```html
<head>
  <!-- Angular Material CSS now available via Google CDN; version 0.9.4 used here -->
  <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css">
</head>
<body>

  <!-- Angular Material Dependencies -->
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js"></script>

  <!-- Angular Material Javascript now available via Google CDN; version 0.9.4 used here -->
  <script src="//ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.js"></script>
```
2. Then you just have to inject the dependencie of angular-material in your root module:

```javascript
angular.module( 'YourApp', [ 'ngMaterial' ] )
```
3. The rest of exercise It's all yours, play with angular-material and get a fancy UI, have fun!

Use your project of exercise 5 to start, then see the [exercise sample solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/6/) to check your result.

## Unit Testing

Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Unit testing can be done manually but is often automated.

**Why Karma?** Karma is a direct product of the AngularJS team from struggling to test their own framework features with existing tools. As a result of this, they made Karma and rightly suggest it as their preferred test runner within the AngularJS documentation.

**Why Jasmine?** Jasmine is a behavior-driven development framework for testing JavaScript code that plays very well with Karma. Similar to Karma, it’s also the recommended testing framework within the AngularJS documentation. Jasmine is also dependency free and doesn’t require a DOM.

**Exercise 7:** First Install Karma and Jasmine APIs, So in the project we are going to install this packages:

```bash
	npm install karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev
```

Then we proceed to install our karma-cli environment:

```bash
	npm install -g karma-cli
```

When everything is ready, we execute the command **karma init** to create in our project the karma.conf.js. In this case our karma-cli are going to answer some configuration stuffs:

![Configuration of Karma](https://cdn.scotch.io/440/L7sg62M5QWiEOtF9CspX_karma-init.png)

In this particular case we are going to show you an example of UserService test unit where we going to make some simple test cases. [Please take a look](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/karma-example.md).

Then you can copy that code in your angular project and save with name UserService.spec.js next to our UserService factory. Finally we have to modify our karma.config.js in the files section the dependencies what we need to run our test case:

```javascript
		files: [
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-ui-router/release/angular-ui-router.js',
      './app/bower_components/angular-mocks/angular-mocks.js',

      './node_modules/angular-material/angular-material.js',

      './app/app.js',

      './app/services/userServices.js',
      './app/services/userServices.spec.js',

    ],
```

Now we need only to run our test case **karma start** and that's it. You are free to play more with karma and jasmine and make more test cases for controllers, components, etc.

Use your project of exercise 6 to start, then see the [exercise sample solved](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angularJS/angularJS-docs/exercises/7/) to check your result.


## Design Patterns in angularJS

>Note: This topic was exactly taked from [here](https://github.com/mgechev/angularjs-in-patterns#services-1).

A software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

### DP in Services

#### Singleton
>The singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or that restrict the instantiation to a certain number of objects.

We can think of each service as a singleton, because each service is instantiated no more than a single time. We can consider the cache as a singleton manager. There is a slight variation from the UML diagram illustrated above because instead of keeping static, private reference to the singleton inside its constructor function, we keep the reference inside the singleton manager (stated in the snippet above as cache).

This way the services are actually singletons but not implemented through the Singleton pattern, which provides a few advantages over the standard implementation:

- It improves the testability of your source code
- You can control the creation of singleton objects (in our case the IoC container controls it for us, by instantiating the singletons lazy)

#### Factory Method
>The factory method pattern is a creational pattern, which uses factory methods to deal with the problem of creating objects without specifying the exact class of object that will be created. This is done by creating objects via a factory method, which is either specified in an interface (abstract class) and implemented in implementing classes (concrete classes); or implemented in a base class, which can be overridden when inherited in derived classes; rather than by a constructor.

Lets consider the following snippet:

```javascript
myModule.config(function ($provide) {
  $provide.provider('foo', function () {
    var baz = 42;
    return {
      //Factory method
      $get: function (bar) {
        var baz = bar.baz();
        return {
          baz: baz
        };
      }
    };
  });
});
```

In the code above we use the config callback in order to define new "provider". Provider is an object, which has a method called $get. Since in JavaScript we don't have interfaces and the language is duck-typed there is a convention to name the factory method of the providers that way.

Each service, filter, directive and controller has a provider (i.e. object which factory method, called $get), which is responsible for creating the component's instance. We can call the provider a "ConcreteCreator" and the actual component, which is being created a "Product".

There are a few benefits of using the factory method pattern in this case, because of the indirection it creates. This way the framework can take care of the boilerplates during the instantiation of new components like:

- The most appropriate moment, when the component needs to be instantiated
- Resolving all the dependencies required by the component
- The number of instances the given component is allowed to have (for services and filters only a single one but multiple for the controllers)

#### Decorator

>The decorator pattern (also known as Wrapper, an alternative naming shared with the Adapter pattern) is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

AngularJS provides out-of-the-box way for extending and/or enhancing the functionality of already existing services. Using the method decorator of $provide you can create "wrapper" of any service you have previously defined or used by a third-party:

```javascript
myModule.controller('MainCtrl', function (foo) {
  foo.bar();
});

myModule.factory('foo', function () {
  return {
    bar: function () {
      console.log('I\'m bar');
    },
    baz: function () {
      console.log('I\'m baz');
    }
  };
});

myModule.config(function ($provide) {
  $provide.decorator('foo', function ($delegate) {
    var barBackup = $delegate.bar;
    $delegate.bar = function () {
      console.log('Decorated');
      barBackup.apply($delegate, arguments);
    };
    return $delegate;
  });
});
```
Using this pattern is especially useful when we need to modify the functionality of third party services. In cases when multiple similar decorations are required (like performance measurement of multiple methods, authorization, logging, etc.), we may have a lot of duplications and violate the DRY principle. In such cases it is useful to use aspect-oriented programming. The only AOP framework for AngularJS I'm aware of could be found at github.com/mgechev/angular-aop.

#### Facade

>A facade is an object that provides a simplified interface to a larger body of code, such as a class library. A facade can:
1. Make a software library easier to use, understand and test, since the facade has convenient methods for common tasks
2. Make the library more readable, for the same reason
3. Reduce dependencies of outside code on the inner workings of a library, since most code uses the facade, thus allowing more flexibility in developing the system
4. Wrap a poorly designed collection of APIs with a single well-designed API (as per task needs).

There are a few facades in AngularJS. Each time you want to provide higher level API to given functionality you practically create a facade. For example to do a http request. Before the $http service, we had to use a XmlHttpRequest object to do that.

With XmlHttpRequest:

```javascript
var http = new XMLHttpRequest(),
    url = '/example/new',
    params = encodeURIComponent(data);
http.open("POST", url, true);

http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");

http.onreadystatechange = function () {
  if(http.readyState == 4 && http.status == 200) {
    alert(http.responseText);
  }
}
http.send(params);
```

With $http service:
```javascript
$http.post('/someUrl', data)
.then(function (response) {
  alert(response);
});
```

#### Proxy

>A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. We can distinguish three different types of proxy: Virtual Proxy, Remote Proxy & Protection Proxy.


For example when we have a variable in our $scope called user, we can think of this object as virtual proxy (a simple placeholder), which would be populated with the actual data once the client receives response by the server. Initially when the snippet above executes, the property user of the $scope object will be with value an empty object ({}), which means that user.name will be undefined and nothing will be rendered. Internally AngularJS will keep reference to this empty object. Once the server returns response for the get request, AngularJS will populate the object with the data, received from the server. During the next $digest loop AngularJS will detect change in $scope.user, which will lead to update of the view.

#### Active Record

>The Active Record object is an object, which carries both data and behavior. Usually most of the data in these objects is persistent, responsibility of the Active Record object is to take care of the communication with the database in order to create, update, retrieve or delete the data. It may delegate this responsibility to lower level objects but calls to instance or static methods of the active record object cause the database communication.

AngularJS defines a service called $resource. In the current version of AngularJS (1.2+) it is being distributed in module outside of the AngularJS' core.

```javascript
var User = $resource('/users/:id'),
    user = new User({
      name: 'foo',
      age : 42
    });

user.$save();
```

The call of $resource will create a constructor function for our model instances. Each of the model instances will have methods, which could be used for the different CRUD operations.

#### Intercepting Filters

>Create a chain of composable filters to implement common pre-processing and post-processing tasks during a Web page request.

In some cases you need to do some kind of pre and/or post processing of HTTP requests. In the case of the Intercepting Filters you pre/post process given HTTP request/response in order to include logging, security or any other concern, which is influenced by the request body or headers. Basically the Intercepting Filters pattern include a chain of filters, each of which process data in given order. The output of each filter is input of the next one.

In AngularJS we have the idea of the Intercepting Filters in $httpProvider. $httpProvider has an array property called interceptors, which contains a list of objects. Each object may have properties called: request, response, requestError, responseError.

```javascript
$httpProvider.interceptors.push(function($q, dependency1, dependency2) {
  return {
   'request': function(config) {
       // same as above
    },
    'response': function(response) {
       // same as above
    }
  };
});
```

### Directives

#### Composite

>The composite pattern is a partitioning design pattern. The composite pattern describes that a group of objects are to be treated in the same way as a single instance of an object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies.

According to the Gang of Four, MVC is nothing more than combination of:

- Strategy
- Composite
- Observer

#### Interpreter

>In computer programming, the interpreter pattern is a design pattern that specifies how to evaluate sentences in a language. The basic idea is to have a class for each symbol (terminal or nonterminal) in a specialized computer language. The syntax tree of a sentence in the language is an instance of the composite pattern and is used to evaluate (interpret) the sentence.

Behind its $parse service, AngularJS provides its own implementation of interpreter of a DSL (Domain Specific Language). The used DSL is simplified and modified version of JavaScript. The main differences between the JavaScript expressions and AngularJS expressions that AngularJS expressions:

- may contain filters with UNIX like pipe syntax
- don't throw any errors
- don't have any control flow statements (exceptions, loops, if statements although you can use the ternary operator)
- are evaluated in given context (the context of the current $scope)

#### Template View

>Renders information into HTML by embedding markers in an HTML page.

The dynamic page rendering is not that trivial thing. It is connected with a lot of string concatenations, manipulations and frustration. Far easier way to build your dynamic page is to write your markup and embed little expressions inside it, which are lately evaluated in given context and so the whole template is being compiled to its end format. In our case this format is going to be HTML (or even DOM). This is exactly what the template engines do - they take given DSL, evaluate it in the appropriate context and then turn it into its end format.

Templates are very commonly used especially in the back-end. For example, you can embed PHP code inside HTML and create a dynamic page, you can use Smarty or you can use eRuby with Ruby in order to embed Ruby code inside your static pages.

For example:

```html
<script type="template/mustache">
  <h2>Names</h2>
  {{#names}}
    <strong>{{name}}</strong>
  {{/names}}
</script>
```

### Scope

#### Observer

>The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods. It is mainly used to implement distributed event handling systems.

There are two basic ways of communication between the scopes in an AngularJS application. The first one is calling methods of parent scope by a child scope. This is possible since the child scope inherits prototypically by its parent, as mentioned above. This allows communication in a single direction - child to parent. Some times it is necessary to call method of given child scope or notify it about a triggered event in the context of the parent scope. AngularJS provides built-in observer pattern, which allows this. Another possible use case, of the observer pattern, is when multiple scopes are interested in given event but the scope, in which context the event is triggered, is not aware of them. This allows decoupling between the different scopes, non of the scopes should be aware of the rest of the scopes.

Each AngularJS scope has public methods called $on, $emit and $broadcast. The method $on accepts topic as first argument and callback as second. We can think of the callback as an observer - an object, which implements the Observer interface (in JavaScript the functions are first-class, so we can provide only implementation of the notify method):

```JavaScript
function ExampleCtrl($scope) {
  $scope.$on('event-name', function handler() {
    //body
  });
}
```

In this way the current scope "subscribes" to events of type event-name. When event-name is triggered in any parent or child scope of the given one, handler would be called.

#### Chain of Responsabilities

>The chain-of-responsibility pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain. A mechanism also exists for adding new processing objects to the end of this chain.

As stated above the scopes in an AngularJS application form a hierarchy known as the scope chain. Some of the scopes are "isolated", which means that they don't inherit prototypically by their parent scope, but are connected to it via their $parent property.

When $emit or $broadcast are called we can think of the scope chain as event bus, or even more accurately chain of responsibilities. Once the event is triggered it is emitted downwards or upwards (depending on the method, which was called). Each subsequent scope may:

- Handle the event and pass it to the next scope in the chain
- Handle the event and stop its propagation
- Pass the event to the next scope in the chain without handling it
- Stop the event propagation without handling it

#### Command

>In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to represent and encapsulate all the information needed to call a method at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

Each $scope has method called $watch. When the AngularJS compiler find the directive ng-bind it creates a new watcher of the expression foo + ' ' + bar | uppercase, i.e. ```javascript $scope.$watch("foo + ' ' + bar | uppercase", function () { /* body */ }); ```. The callback will be triggered each time the value of the expression change. In the current case the callback will update the value of the span.

We can think of the watcher object as a command. The expression of the command is being evaluated on each "$digest" loop. Once AngularJS detects change in the expression, it invokes the listener function. The watcher command encapsulates the whole information required for watching given expression and delegates the execution of the command to the listener (the actual receiver). We can think of the $scope as the command's Client and the $digest loop as the command's Invoker.

### Controllers

#### Page Controller

>An object that handles a request for a specific page or action on a Web site. Page Controller pattern accept input from the page request, invoke the requested actions on the model, and determine the correct view to use for the resulting page. Separate the dispatching logic from any view-related code

Since there is a lot of duplicate behavior between the different pages (like rendering footers, headers, taking care of the user's session, etc.) page controllers can form a hierarchy. In AngularJS we have controllers, which are with more limited scope of responsibilities. They don't accept user requests, since this is responsibility of the $route or $state services and the page rendering is responsibility of the directives ng-view/ui-view.

Similarly to the page controllers, AngularJS controllers handle user interactions, provide and update the models. The model is exposed to the view when it is being attached to the scope, all methods invoked by the view, in result of user actions, are ones, which are already attached to the scope. Another similarity between the page controllers and the AngularJS controllers is the hierarchy, which they form. It corresponds to the scope hierarchy. That way common actions can be isolated to the base controllers.

## Best Practices

### How to Use 'controllerAs' Sintax Properly?

Angular is a very powerful framework, sometimes too powerful causing some developers to make some architecture mistakes. The two-way data binding and the power of directives are awesome, but you need to think about what are you doing and try to use some best practices to avoid common pitfalls during the development process.

Controllers are class-like objects to “control” the model and update the view, and as you know everything is based around the magic and mystic $scope property.

A good practice is to avoid binding everything to $scope, because too many bindings crowd the watch list of the $digest loop. To avoid that, Angular give us the controllerAs property.

### Writing Controllers as Classes

Depending if you have access to ES6 into your angularjs use ES5:

```javascript
var aClass = function () {
  this.name = 'Class name';
};
var instance = new aClass();
```
Use this over $scope inside your class, It's much better.

### How to Set Watch

One question that comes to mind when you use this kind of syntax is how to use a $watch call because you need to inject $scope. We fight to remove the use of $scope, and now we need to inject it anyway.

Well, we can keep using controllerAs and keep binding methods and properties to the this object that is binded to the current $scope. At the same time, we can keep the separation of concerns using $scope only for special cases, like $watch, $on, or $broadcast. Example:

```javascript
app.controller('Ctrl', function ($scope) {
    this.name = 'name';

    $scope.$watch(angular.bind(function () {
      return this.title
    }), function (newVal, oldVal) {

    });
});
```
### Single Responsability

Define 1 component per file, recommended to be less than 400 lines of code. Why?

- One component per file promotes easier unit testing and mocking.

- One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.

- One component per file avoids hidden bugs that often arise when combining components in a file where they may share variables, create unwanted closures, or unwanted coupling with dependencies.

### Small Functions

Define small functions, no more than 75 LOC (less is better). Why?

- Small functions are easier to test, especially when they do one thing and serve one purpose.

- Small functions promote reuse.

- Small functions are easier to read.

- Small functions are easier to maintain.

- Small functions help avoid hidden bugs that come with large functions that share variables with external scope, create unwanted closures, or unwanted coupling with dependencies.

### Javascript Scopes

Wrap Angular components in an Immediately Invoked Function Expression (IIFE). Why?

- An IIFE removes variables from the global scope. This helps prevent variables and function declarations from living longer than expected in the global scope, which also helps avoid variable collisions.

- When your code is minified and bundled into a single file for deployment to a production server, you could have collisions of variables and many global variables. An IIFE protects you against both of these by providing variable scope for each file.

```javascript
/* avoid */
// logger.js
angular
    .module('app')
    .factory('logger', logger);

// logger function is added as a global variable
function logger() { }

// storage.js
angular
    .module('app')
    .factory('storage', storage);

// storage function is added as a global variable
function storage() { }
```

```javascript
/**
 * recommended
 *
 * no globals are left behind
 */

// logger.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('logger', logger);

    function logger() { }
})();

// storage.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage);

    function storage() { }
})();
```

### Avoid Naming Collisions

Use unique naming conventions with separators for sub-modules.
Why?: Unique names help avoid module name collisions. Separators help define modules and their submodule hierarchy. For example app may be your root module while app.dashboard and app.users may be modules that are used as dependencies of app.

### Definitions (aka Setters)

Declare modules without a variable using the setter syntax.

Why?: With 1 component per file, there is rarely a need to introduce a variable for the module.

```javascript
/* avoid */
var app = angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'app.shared',
    'app.dashboard'
]);
```

```javascript
/* recommended */
angular
    .module('app', [
        'ngAnimate',
        'ngRoute',
        'app.shared',
        'app.dashboard'
    ]);
```

### Bindable Members Up Top

Place bindable members at the top of the controller, alphabetized, and not spread through the controller code. Why?

- Placing bindable members at the top makes it easy to read and helps you instantly identify which members of the controller can be bound and used in the View.

- Setting anonymous functions in-line can be easy, but when those functions are more than 1 line of code they can reduce the readability. Defining the functions below the bindable members (the functions will be hoisted) moves the implementation details down, keeps the bindable members up top, and makes it easier to read.

```javascript
/* avoid */
function SessionsController() {
    var vm = this;

    vm.gotoSession = function() {
      /* ... */
    };
    vm.refresh = function() {
      /* ... */
    };
    vm.search = function() {
      /* ... */
    };
    vm.sessions = [];
    vm.title = 'Sessions';
}
```

```javascript
/* recommended */
function SessionsController() {
    var vm = this;

    vm.gotoSession = gotoSession;
    vm.refresh = refresh;
    vm.search = search;
    vm.sessions = [];
    vm.title = 'Sessions';

    ////////////

    function gotoSession() {
      /* */
    }

    function refresh() {
      /* */
    }

    function search() {
      /* */
    }
}
```

[For more good practice check this page](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

## Bibliography

1. https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html
2. https://docs.angularjs.org/guide/
3. https://www.w3schools.com/angular/angular_routing.asp
4. http://tutorials.jenkov.com/angularjs/routes.html
5. https://desarrolloweb.com/articulos/bindings-componentes-angularjs.html
6. https://github.com/mgechev/angularjs-in-patterns#services-1
7. https://www.toptal.com/angular-js/tips-and-practices
8. https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
