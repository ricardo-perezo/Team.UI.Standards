# VanillaJS
_____________

<!-- vscode-markdown-toc -->
* 1. [Introduction](#Introduction)
* 2. [DOM Manipulation](#DOMManipulation)
* 3. [HTTP Request](#HTTPRequest)
* 4. [Events](#Events)
* 5. [The Real Time Ilusion](#TheRealTimeIlusion)
	* 5.1. [Change a text on input change](#Changeatextoninputchange)
* 6. [The Router](#TheRouter)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
##  1. <a name='Introduction'></a>Introduction
It's necesary understand that its possible work without frameworks or libraries but in the real world we can't take to much time to build everything from zero so this document don't pretend fight against jquery or frameworks, this document is to understand how we can work more efficiently and understand how some libraries work.

##  2. <a name='DOMManipulation'></a>DOM Manipulation 
Actually thanks to css3 is not necessary made style modifications or animations directly with js it's width only changing the classes we can make beatiful animations with good performance.

```js
//Jquery
$("div").addClass("intro");


//ES2015 Way
[...document.querySelectorAll('div')].map(function(el){
    el.addClass("intro");
});

```
Looks  dirty but see that for Jquery needs load 84KBs and for the second 0KBs.


To append a new element it's easier:
```js
//JQuery
$("#parent").append(element);

//Vanilla
document.querySelector("#parent").append(element)
```




##  3. <a name='HTTPRequest'></a>HTTP Request

```js
//jQuery 
$.getJSON('/my/url', function(data) {

});
//VanillaJS

var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```
As you can see it's just about know the parts of the request and what is needed to refactorize, for post it' can be hadled by a form but if it's needed make something by js:
```js
//Jquery
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});
//Vanilla
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);
```

##  4. <a name='Events'></a>Events
To handle an event it's really similar to jquery but faster
```js
//Jquery
$(el).on(eventName, eventHandler);
//VanillaJS
el.addEventListener(eventName, eventHandler);
```

even the delegation events passed from  the key to use Jquery to be useles
```js
//jQuery
element.on('click', '.hello', function() {
    alert('Hello!');
});
//Vanilla JS
element.addEventListener('click', function(event) {
    if (event.target.matches('.hello')) {
        alert('Hello!');
        event.stopPropagation();
    }
});
```

At this moment it's understandable the point of this topic to review more functions to substitute JQuery you can go [here](http://codeblog.cz/vanilla/traversal.html#get-single-element-ancestors)

##  5. <a name='TheRealTimeIlusion'></a>The Real Time Ilusion
A lot of frameworks help us to interact with the user, some times, the project is to short to implement a big framework for a landing page for example. So this chapter is to reinforce our skills and implements VanillaJS to recreate some functionalities that some times create the WOW effect que we see a new framework.

###  5.1. <a name='Changeatextoninputchange'></a>Change a text on input change 
The first example is change the text of a element depending of a input

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <input type="text" data-input="custom">
    <h1 data-text="custom"><h1>
</body>
</html>
```

```js

document.querySelector('[data-input="custom"]').addEventListener("keydown", changeText); 
document.querySelector('[data-input="custom"]').addEventListener("keyup", changeText); 
document.querySelector('[data-input="custom"]').addEventListener("keypress", changeText); 
function changeText(event){
    document.querySelector('[data-text="custom"]').innerHTML=event.target.value;
}
```
It works but is no to much impresive because it's semi harcoded.
if we wanted a kind of function to make this modular we should set some rules for example, to identify any kind of data  we will use de convention of [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

```js
var micro_framework = (function create_Module() {
    var app = {};
     function addListeners() {
        [].map.call(document.querySelectorAll('[data-input]'), function (element) {
            element.addEventListener("keydown", changeValues);
            element.addEventListener("keyup", changeValues);
            element.addEventListener("keypress", changeValues);
        });
    }
    function changeValues(event) {
        [].map.call(document.querySelectorAll('[data-text="' + event.target.getAttribute('data-input') + '"]'), function (element) {
            element.innerHTML = event.target.value;
        });
        [].map.call(document.querySelectorAll('[data-input="' + event.target.getAttribute('data-input') + '"]'), function (element) {
            element.value = event.target.value;
        })
    }
    app.create = function create() {
        addListeners();
    }
    return app;
})()
micro_framework.create();
```
25 Lines of code to get a "primitive" microframework, a lot of stuff is needed to validate and improve but it's a good start. As you can see the performance is not too good because we are adding a lot of listeners to the dom to check the changes, what if we need to change 1000 inputs at the same time?, Do we need to add 4000 listeners?

Taking as reference the some patterns to improve the performance first we can put an id to identify the scope of our app in the dom.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
<div id="app-container">
  <input type="text" data-input="name">
  <h1 data-text="name"><h1>    
</div>
</body>
</html>
```
Json structure to get dynamic params, by the moment only take the element where the component will render
```js
//data structure 
{
  element: '#app-container',//if we use an css selector we can use easilly use querySelector for our operations  
}
```

Now the big deal, if we want to create a module like this 
```js
var app = new micro_framework({
  element: '#app-container',
  data: {
    name:"John",
    last_name:"Doe",
    address:"ellison park",
  }
});
```
It's necessary make touch our code
```js
var micro_framework = (function create_Module() {
  var virtualDom={};//Creating a  variable for our Dom 
  var app = function app(params){     
  var component=this;
      component.getDynamicDom =  function getDynamicDom(container){  
            virtualDom.inputs = [].slice.call(container.querySelectorAll("[data-input]"));
            virtualDom.texts  =  [].slice.call(container.querySelectorAll("[data-text]"));
        }
       component.addListeners= function addListeners(inputs) {          
          inputs.map( function (element) {
            element.addEventListener("keyup", component.changeValues);
            element.addEventListener("keydown", component.changeValues);
            element.addEventListener("keypress", component.changeValues); 
        });
    } 
     component.changeValues=function changeValues(event) {
     component.renderValues(event.target.getAttribute("data-input"))
    } 
     component.renderValues = function renderValues(target) {            
     [].map.call(component.container.querySelectorAll('[data-text="' + target + '"]'), 
        function (element){
                element.innerHTML = event.target.value;
        });
        [].map.call(component.container.querySelectorAll('[data-input="' + target + '"]'), function (element){     
            element.value = event.target.value;
         })
    }
        component.container=document.querySelector(params.element);        
        component.getDynamicDom(this.container);              
        component.addListeners(virtualDom.inputs);    
};
    return app;
})();
var app = new micro_framework({
  element: '#app-container'
});
```
As you can see the code make the same thing but with some improvements in to the structure and readibility, now What happend if I want to bind a json object to our view, so we can load default data to our view.


```js
var micro_framework = (function create_Module() {
  var virtualDom={};//Creating a "hidden variable"     
  var app = function app(params){
  var component=this;    
        component.data=params.data;
        component.loadData = function loadData(container){          
        virtualDom.inputs.map(function(element){ 
          var newProperty=element.getAttribute("data-input");
          if(!component.data.hasOwnProperty(newProperty)){
            component.data[element.getAttribute("data-input")]=element.value;
          }
         });
        virtualDom.texts.map(function(element){
          var newProperty=element.getAttribute("data-text");
          if(!component.data.hasOwnProperty(newProperty)){
             component.data[element.getAttribute("data-text")]="";
            }
          });                 
          Object.keys(component.data).map(function(data){
            component.renderValues(data) 
          })        
        }                                            
        component.getDynamicDom =  function getDynamicDom(container){  
          virtualDom.inputs = [].slice.call(container.querySelectorAll("[data-input]"));
          virtualDom.texts  = [].slice.call(container.querySelectorAll("[data-text]"));
        }
        component.addListeners= function addListeners(inputs) {                   
           inputs.map( function (element) {
           element.addEventListener("keyup",   component.changeValues);
           element.addEventListener("keydown", component.changeValues);
           element.addEventListener("keypress",component.changeValues); 
        });
        } 
        component.changeValues=function changeValues(event) {          
        var variable=event.target.getAttribute("data-input");
          component.data[variable]=event.target.value;                    
          component.renderValues(variable) 
        }
        component.renderValues = function renderValues(variable) {          
          try{                      
          [].map.call(component.container.querySelectorAll('[data-text="' +variable + '"]'),function (element){
            element.innerHTML = component.data[variable];
          });
            }catch(e){}// you can't make a map of null values 
          try{                      
          [].map.call(component.container.querySelectorAll('[data-input="' + variable + '"]'), function (element){     
            element.value = component.data[variable];
         });
            } catch(e){               
            }
        }
        component.container=document.querySelector(params.element);
        component.model=params.data;
        component.getDynamicDom(this.container);               
        component.loadData(this.container);  
        component.addListeners(virtualDom.inputs);
    };
    return app;
})();

var app = new micro_framework({
  element: '#app-container',
  data: {
    name:"John",
    last_name:"Doe",
    address:"ellison park", 
  }
});

```
Okey with this it's posible simulate a 2 way data binding there exist some cases were we don't react for example what happend if we change the data directly on the object?, propose your solution! without using watch or observe methods. 

##  6. <a name='TheRouter'></a>The Router
the next step it's create a router to make the simulation of a sigle page application, to simulate this we need just 3 things the route, the template and a "component".

```js
var router= new Router([
{path:'home',component:
,template:'<h1>Hello world</h1>'}
{path:'404',component:null,template:'<h1>Not Found</h1>'}
]);
```
The router should detect the hash location and render the respective template for each route.

```js
var Router = (function createRouter() {
  function router(routes) {
    var router = this;
        router.routes=routes,
        router.view=document.getElementById("data-view");
        
    function loadRoute(validRoute) {      
      var defaultComponent={template:'404 error not found'}
      var componentToLoad=
      (validRoute.index>=0)?router.routes[validRoute.index]:defaultComponent;        
          router.view.innerHTML=componentToLoad.template||"";
          if(componentToLoad.component){
            new micro_framework(componentToLoad.component);
          }
    }
    function checkRoute() {
       var path= location.hash.slice(1);
       var findedIndex=-1;
       var finded=router.routes.some(function findPath(route,index){
         if(route.path===path){
           findedIndex=index;
           return true;
         }
       });
        if(!finded){
          router.routes.some(function findPath(route,index){
          if(route.path==="404"){
           findedIndex=index;
           return true;
          }
       });
        }
       var validRoute={
         path:(finded)?path:"404",
         index:findedIndex,
       }

       return validRoute;
  }

    function changeRoute() {
      var validRoute= checkRoute();
      loadRoute(validRoute);
    }

    router.routes = routes;
    window.addEventListener("hashchange", changeRoute, false);
    changeRoute();
  }
  return router;
})();
```
And done now you have your own primitive microframework.
You can find the files of the entire project in this repo so you can check and improve it.
Can you make this better?
