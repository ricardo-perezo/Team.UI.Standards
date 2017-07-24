# Architecture Overview
Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.

The framework consists of several libraries, some of them core and some optional.

## Provider
Is a resource or JavaScript “thing” that Angular uses to provide (result in, generate) something we want to use:
- A class provider generates/provides an instance of the class.
- A factory provider generates/provides whatever returns when you run a specified function.
- A value provider doesn’t need to take an action to provide the result like the previous two, it just returns its value.

Unfortunately, the term “provider” is sometimes used to mean both the class, function or value and the thing that results from the provider – a class instance, the function’s return value or the returned value.


## Classes
Are a new feature in ES6, used to describe the blueprint of an object and make EcmaScript's prototypical inheritance model function more like a traditional class-based language.

Traditional class-based languages often reserve the word this to reference the current (runtime) instance of the class. In Javascript this refers to the calling context and therefore can change to be something other than the object.

## Interface
Is a TypeScript artifact, it is not part of ECMAScript. An interface is a way to define a contract on a function with respect to the arguments and their type. Along with functions, an interface can also be used with a Class as well to define custom types.

An interface is an abstract type, it does not contain any code as a class does. It only defines the 'signature' or shape of an API. During transpilation, an interface will not generate any code, it is only used by Typescript for type checking during development.

Here is an example of an interface describing a function API:

```html
interface PrintOutput {
  (message: string): void;    // common case
  (message: string[]): void;  // less common case
}

let printOut: PrintOutput = (message) => {
  if (Array.isArray(message)) {
    console.log(message.join(', '));
  } else {
    console.log(message);
  }
}

printOut('hello');       // 'hello'
printOut(['hi', 'bye']); // 'hi, bye'
```

## Pipes
A pipe takes in data as input and transforms it to a desired output. In this page, you'll use pipes to transform a component's birthday property into a human-friendly date.

```html
import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
```

As you can see, pipes are exclusive for the component's template to decide according a condition of which case of format data are going to be displayable.



## Modules
Angular applications are modular. Every Angular application has at least one module (the root module), conventionally named AppModule. The root module can be the only module in a small application, but most apps have many more modules. As the developer, it's up to you to decide how to use the modules concept.

> Decorators are functions that modify JavaScript classes. Angular has many decorators that attach metadata to classes so that it knows what those classes mean and how they should work. Learn more about decorators on the web.

NgModule is a decorator function that takes a single metadata object whose properties describe the module. The most important properties are:

- declarations: the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
- exports: the subset of declarations that should be visible and usable in the component templates of other modules.
- imports: other modules whose exported classes are needed by component templates declared in this module.
- providers: creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
- bootstrap: the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.

[See Example...](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angular/angular/module.md)

Launch an application by bootstrapping its root module. During development you're likely to bootstrap the AppModule in a main.ts file like this one

``` html
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

## Components
A component controls a patch of the page, called a view. You define a component's application logic — what it does to support the view inside a class. The class interacts with the view through an API of properties and methods. A component contains a class, a template, and metadata. A template is a form of HTML that tells Angular how to render the component. A component can belong to one and only one module.

[See Example...](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angular/angular/component.md)

## Services
A service provides any value, function, or feature that your application needs. A service is typically a class with a narrow, well-defined purpose; it should do something specific and do it well. Components are big consumers of services. Services are big consumers of microservices.

**Consider adding @Injectable() to every service class.**

## Routes
Routes enable navigation from one view to the next as users perform application tasks. A route is equivalent to a mechanism used to control menus and submenus.
Now that you understand the benefits of SPAs and have a grasp on Angular concepts, it's time to get set up to work on the sample project.

The route definition has the following parts:

- Path: The router matches this route's path to the URL in the browser address bar.
- Component: The component that the router should create when navigating to this route.

[See Example](https://github.com/ricardo-perezo/Team.UI.Standards/blob/standars/uiDocs/angular/angular/route.md)

### Base href

Most routing applications should add a ``` <base href='/'> ``` element to the index.html as the first child in the <head> tag to tell the router how to compose navigation URLs.

## Guards

Sometimes we want to prevent our users accessing areas that they’re not allowed to access, or, we might want to ask them for confirmation when leaving a certain area. Angular’s router provides a feature called Navigation Guards that try to solve exactly that problem.

### Guard Types
There are four different guard types we can use to protect our routes:
- CanActivate: Decides if a route can be activated
- CanActivateChild: Decides if children routes of a route can be activated
- CanDeactivate: Decides if a route can be deactivated
- CanLoad: Decides if a module can be loaded lazily

#### Activating Routes (Defining Guards)

***As Function (providers way):*** we need to define a token and the guard function. Here’s what a super simple guard implementation could look like:

```html
@NgModule({
  ...
  providers: [
    provide: 'CanAlwaysActivateGuard',
    useValue: () => {
      return true;
    }
  ],
  ...
})
export class AppModule {}
```

Since it’s always returning true, this guard is not protecting anything, as it will always activate the route that uses it.

Once a guard is registered with a token, we can use it in our route configuration. The following route configuration has the CanAlwaysActivateGuard attached, which gets executed when routing to that specific route.

```html
export const AppRoutes:RouterConfig = [
  {
    path: '',
    component: SomeComponent,
    canActivate: ['CanAlwaysActivateGuard']
  }
];
```

***As Classes:*** Sometimes, a guard needs dependency injection capabilities. In these cases, it makes sense to define a guard as a class, because dependencies can then be simply injected.

When creating a guard class, we implement either the CanActivate, CanDeactivate, or CanActivateChild interface, which requires us to have a method canActivate(), canActivateChild(), or canDeactivate() respectively.

```html
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isLoggedIn();
  }
}
```

Angular will call that method for us when a guard is implemented as a class. Just like the previous guard, this one needs to be registered as a provider:

```html
@NgModule({
  ...
  providers: [
    AuthService,
    CanActivateViaAuthGuard
  ]
})
export class AppModule {}
```
And can then be used on a route:

```html
{
  path: '',
  component: SomeComponent,
  canActivate: [
    'CanAlwaysActivateGuard',
    CanActivateViaAuthGuard
  ]
}
```

### Deactivating Routes

CanDeactivate gives us a chance to decide if we really want to navigate away from a route. This can be very useful, if for example we want to prevent our users from losing unsaved changes when filling out a form and accidently clicking on a button to cancel the process.

```html
import { CanDeactivate } from '@angular/router';
import { CanDeactivateComponent } from './app/can-deactivate';

export class ConfirmDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  canDeactivate(target: CanDeactivateComponent) {
    if(target.hasChanges()){
        return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
}
```

 CanDeactivate<T> uses a generic, so we need to specify what component type we want to deactivate. Also this guard needs to be registered accordingly:

 ```html
 @NgModule({
  ...
  providers: [
    ...
    ConfirmDeactivateGuard
  ]
})
export class AppModule {}
 ```




# Benefits of Angular 2 over Angular 1.x

## Improved Dependency Injection

Current AngularJS 1.x has issues like the execution of minification and features basic to cutting-edge service side NET or Java frameworks. These issues are solved in Angular 2 with help of Dependency Injection. DI allows you to insert dependencies in different components in various parts over the applications without requiring any information on how those dependencies are created or what dependencies they require themselves. By this, you can evade tightly coupled components by injecting dependencies when required. As long as the implementations confirm to a standard protocol or rule, you can inject different implementations to a similar component. If you specify an argument of type Service in the Component constructor, Angular 2 will automatically instantiate and inject that service into the component. This facilitates the construction of object instances, as now you can give the required information to the DI library and let it handle the rest!


## Asynchronous Template Compilation
In Angular 2.0, when you compile a template, you are not only providing the compiler with a template, but you also providing a Component definition. Component definition contains metadata about what directives, filters, and much more were used in the template. This ensures that the necessary dependencies are loaded before the template gets processed by the compiler. As the code is based on the ES6 module spec, the provided module loader can now load dependencies by basically referencing them in the component definition. This component will additionally ease the coding as web developers now wouldn’t need to depend on manual template compilation whenever they make a small change.

## Simpler Routing
Angular 2 uses the component based routing, which implies components themselves are agnostic of the routes and so can be utilized without considering of the routes. Routing is used to separate different parts of the application.

## TypeScript
TypeScript is a superset of JavaScript that allows you to define new types. Declaring variables with types rather than the generic var opens the way to new tooling support, which you will find to be a great efficiency enhancer. It also provides advanced autocompletion, route, and refactoring. It comes with a static code analyzer, and as you enter the code in your TypeScript-aware IDE, you’re guided by context sensitive help recommending the accessible methods in the object or types of the function argument. If you incidentally use an incorrect type, the IDE will highlight the erroneous code.

## Component-Based
Angular 2 is entirely component based. A component is an independent cohesive block of code which has the required logic, view, and data as one unit. In Angular 2, Component is a special kind of directive that uses a simpler configuration which is appropriate for a component-based application structure. Controllers and $scope are no longer used in Angular 2. They have been replaced by components and directives.


## Tooling
Angular 2 is to make the best possible set of tools for building web apps not constrained by maintaining backward compatibility with existing APIs. You’ll be building a Web application with a complex web stack featuring cutting edge and impressive toolings such as Webpack, Typescript and ES6 transpiling.

# Observable Over Promises

## Promise

A Promise handles a single event when an async operation completes or fails.

> Note: There are Promise libraries out there that support cancellation, but ES6 Promise doesn't so far.

## Observable

- An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.

- Often Observable is preferred over Promise because it provides the features of Promise and more. With Observable it doesn't matter if you want to handle 0, 1, or multiple events. You can utilize the same API in each case.

- Observable also has the advantage over Promise to be cancelable. If the result of an HTTP request to a server or some other expensive async operation isn't needed anymore, the Subscription of an Observable allows to cancel the subscription, while a Promise will eventually call the success or failed callback even when you don't need the notification or the result it provides anymore.

- Observable provides operators like map, forEach, reduce, ... similar to an array

- There are also powerful operators like retry(), or replay(), ... that are often quite handy.


# Bibliography

1. https://www.ibm.com/developerworks/library/wa-implement-a-single-page-application-with-angular2/index.html

2. https://angular.io/guide/architecture

3. http://www.cmarix.com/Know-how-Angular-2-is-different-from-AngularJS-1.x

4. https://stackoverflow.com/questions/37364973/angular-promise-vs-observable

5. https://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html

6. https://www.sitepoint.com/angular-2-components-providers-classes-factories-values/

7. https://angular-2-training-book.rangle.io/handout/features/interfaces.html

8. https://angular.io/guide/pipes

# Some Practices

http://amanvirk.me/angular-cli-getting-started/

https://stormpath.com/blog/angular-2-user-authentication
