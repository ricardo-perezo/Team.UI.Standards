#VanillaJS
_____________

##Introduction
It's necesary understand that its possible work without frameworks or libraries but in the real world we can't take to much time to build everything from zero so this document don't pretend fight against jquery or frameworks, this document is to understand how we can work more efficiently and understand how some libraries work.

## DOM Manipulation 
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




## HTTP Request

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

## Events
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

## The Real Time Ilusion
A lot of frameworks help us to interact with the user, some times, the project is to short to implement a big framework for a landing page for example. So this chapter is to reinforce our skills and implements VanillaJS to recreate some functionalities that some times create the WOW effect que we see a new framework.

### Change a text on input change 
The first example is change the text of a element depending of a input

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <input type="text" data-variable="custom">
    <h1 data-text="custom"><h1>
</body>
</html>
```

```js

document.querySelector('[data-variable="custom"]').addEventListener("keydown", changeText); 
document.querySelector('[data-variable="custom"]').addEventListener("keyup", changeText); 
document.querySelector('[data-variable="custom"]').addEventListener("keypress", changeText); 
function changeText(event){
    document.querySelector('[data-text="custom"]').innerHTML=event.target.value;
}
```
It works but is no to much impresive because it's semi harcoded.
if we wanted a kind of function to make this modular we should set some rules for example, to identify any kind of variable we will use de convention of [data attribute ](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

```js
var micro_framework = (function create_Module() {
    var app = {};
    app function addListeners() {
        [].map.call(document.querySelectorAll('[data-variable]'), function (element) {
            element.addEventListener("keydown", changeValues);
            element.addEventListener("keyup", changeValues);
            element.addEventListener("keypress", changeValues);
        });
    }
    function changeValues(event) {
        [].map.call(document.querySelectorAll('[data-text="' + event.target.getAttribute('data-variable') + '"]'), function (element) {
            element.innerHTML = event.target.value;
        });
        [].map.call(document.querySelectorAll('[data-variable="' + event.target.getAttribute('data-variable') + '"]'), function (element) {
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
25 Lines of code to get a "primitive" microframework, a lot of stuff is needed to validate but it's a good start.

