<!-- vscode-markdown-toc -->
* 1. [Variables](#Variables)
* 2. [Loose Typing](#LooseTyping)
* 3. [Operators](#Operators)
* 4. [Coersion](#Coersion)
* 5. [Conditionals](#Conditionals)
	* 5.1. [ If...else](#If...else)
	* 5.2. [Switch](#Switch)
	* 5.3. [Ternary](#Ternary)
* 6. [Template Literals](#TemplateLiterals)
* 7. [Loops](#Loops)
	* 7.1. [For](#For)
* 8. [Arrays](#Arrays)
	* 8.1. [Predefined Array Functions](#PredefinedArrayFunctions)
* 9. [Functions](#Functions)
	* 9.1. [Anonymous Functions](#AnonymousFunctions)
	* 9.2. [Defined Function](#DefinedFunction)
		* 9.2.1. [Arguments](#Arguments)
		* 9.2.2. [Default Parametters](#DefaultParametters)
		* 9.2.3. [Lazy Functions](#LazyFunctions)
	* 9.3. [Arrow Functions](#ArrowFunctions)
* 10. [This](#This)
* 11. [Scope](#Scope)
	* 11.1. [Function scope](#Functionscope)
	* 11.2. [Block scope](#Blockscope)
	* 11.3. [Expression Scope IIFE](#ExpressionScopeIIFE)
* 12. [Hoisting](#Hoisting)
* 13. [Closure](#Closure)
* 14. [Objects](#Objects)
	* 14.1. [Function Binding](#FunctionBinding)
	* 14.2. [JSON](#JSON)
	* 14.3. [Predefined object functions](#Predefinedobjectfunctions)
* 15. [Prototype](#Prototype)
* 16. [Standard Built-in Object Methods](#StandardBuilt-inObjectMethods)
* 17. [Standard Built-in Array Methods](#StandardBuilt-inArrayMethods)
* 18. [Method Chaining](#MethodChaining)
* 19. [Use Strict](#UseStrict)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
Introduction to JS
===================

# Introduction
##  1. <a name='Variables'></a>Variables
Variables are containers that you can store values in. You start by declaring a variable with the var keyword, followed by any name you want to call it:
```js
//Declaration of  undefined or unasigned value
var myVariable;
//Declaration of literal variables 
var myNumber=123;
var myString="This is a string";
var myBolean=true;
``` 
Also we can  declare objects that can collect another variables inside, those variables can be literals or another objects. In JS exist 2 kinds of objects: 
objects "{}" and array "[]"
```js
//Declaration of Objects 
//The object should be " { key : value } " format  
var myObject={
        myProperty:"any value",
        myNestedObject:{
            subProperty:123,
            }
        }
// Declaration of Arrays
var myArray=[1,2,3,"a","b",true, myObject]
``` 
##  2. <a name='LooseTyping'></a>Loose Typing
As you can see in JS we don't declare de type of variable so we can transform that variable in to any different type of variable without problem.
```js
var myVariable;

myVariable = "hello";
myVariable = 123;
myVariable = true;
myVariable = {any:"value"};
console.log(myVariable) 
``` 
##  3. <a name='Operators'></a>Operators
JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.

```js
//Assigment Operators
var [x,y]=10;
//Addition
x = y + 2
//Subtraction
x = y - 2
//Multiplication
x = y * 2
//Division
x = y / 2
//Modulus (division remainder)
x = y % 2
//Increment
x = ++y
//Decrement
x = --y
```
##  4. <a name='Coersion'></a>Coersion

The coersion is an interpretation of the compiler about operations of 2 differents types of variables
```js
var myVariable;
myVariable = 3 + 3; // 6
myVariable = 3 + "3"; // 33
myVariable = 3 + true; // 4
myVariable = 3 - true; // 2
myVariable = 3 - "3"; // 0
myVariable = 3 - "3a"; // NaN
``` 
The JS compiler interpret the string in to integers only if it is made by number "3","54", etc. the boleans have the respective values true=1 and false=0 so if you try to make some operations between different kinds of variables keep that in mind.
##  5. <a name='Conditionals'></a>Conditionals
A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: if...else and switch.

###  5.1. <a name='If...else'></a> If...else
if...else statement

Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:
```js
if (condition) {
  statement_1;
} else {
  statement_2;
}
```
Here the condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.

You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:
```js
if (condition_1) {
  // statement_1;
} else if (condition_2) {
  // statement_2;
} else if (condition_n) {
 //  statement_n;
} else {
  // statement_last;
} 
```
In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement ({ ... }) . In general, it's good practice to always use block statements, especially when nesting if statements:
```js
if (condition) {
//  statement_1_runs_if_condition_is_true;
} else {
 // statement_2_runs_if_condition_is_false;

```
It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:
```js
if (x = y) {
  /* statements here */
}
```
If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:
```js
if ((x = y)) {
  /* statements here */
}
```
###  5.2. <a name='Switch'></a>Switch
A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement. A switch statement looks as follows:
```js
switch (expression) {
  case 1:
   // statements_1
    break;
  case 2:
    //statements_2
    break;    
  //...
  //...
  default:
    //statements_def
    break;
}
```

The program first looks for a case clause with a label matching the value of expression and then transfers control to that clause, executing the associated statements. If no matching label is found, the program looks for the optional default clause, and if found, transfers control to that clause, executing the associated statements. If no default clause is found, the program continues execution at the statement following the end of switch. By convention, the default clause is the last clause, but it does not need to be so.

The optional break statement associated with each case clause ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If break is omitted, the program continues execution at the next statement in the switch statement.
###  5.3. <a name='Ternary'></a>Ternary

The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

```js
var isThisConditional=true;
(isThisConditional) ? 'return on true':'return this section on false';
```

Multiple ternary evaluations are also possible (note: the conditional operator is right associative):
```js
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';
  
console.log(access); // "Access granted"
```
You can also use multiple conditions like in a multiple-conditions IF statement
```js
var condition1 = true,
    condition2 = false,
    access = condition1 ? (condition2 ? "true true": "true false") : (condition2 ? "false true" : "false false");

console.log(access); // "true false"
```

##  6. <a name='TemplateLiterals'></a>Template Literals
Js can insert variables directly in to string template variables that is a kind of string but with the `` instead quotes.
```js
var myVariable = "John";
var message=`This is ${myVariable} name`;
console.log(message);// This is John name
```

##  7. <a name='Loops'></a>Loops
###  7.1. <a name='For'></a>For
The for loop is the most compact form of looping and includes the following three important parts −
The loop initialization where we initialize our counter to a starting value. The initialization statement is executed before the loop begins.
The test statement which will test if the given condition is true or not. If condition is true then code given inside the loop will be executed otherwise loop will come out.
The iteration statement where you can increase or decrease your counter.

```js

for (var iterator=0; iterator<=limit; iterator++){
  // Statement(s) to be executed if test condition is true
}
```

##  8. <a name='Arrays'></a>Arrays
An array is an ordered collection of data (either primitive or object depending upon the language). Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value. 

Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods. 

What an array in JavaScript looks like:
```js
var myArray = [1, 2, 3, 4];

var catNamesArray = ["Jacqueline", "Sophia", "Autumn"];

//Arrays in JavaScript can hold different types of data, as shown above.
```
###  8.1. <a name='PredefinedArrayFunctions'></a>Predefined Array Functions

##  9. <a name='Functions'></a>Functions


###  9.1. <a name='AnonymousFunctions'></a>Anonymous Functions
An anonymous function is a function without a function name:
```js
function(myParam){
	return myParam;
}
foo();
// Also we can called like this (anonymous_function)() 
 ( function() { 
	 console.log("hello");
 })()//() it's the function caller
```

###  9.2. <a name='DefinedFunction'></a>Defined Function


####  9.2.1. <a name='Arguments'></a>Arguments
The arguments of a function could be variable so we can use those dynamically with the object "arguments"
```js
function sumAll(){
	var total=0,
		limit=arguments.length;	
	for(var i= 0;i<limit;i++){
		total+=arguments[i];
	}
}

sumAll(1,2,3,4,5,6) //21

```

####  9.2.2. <a name='DefaultParametters'></a>Default Parametters

```js
function myLog(param1=1,param2=2){
	console.log(param1+" , "+param2)
}
myLog(5,10); // 5 , 10
myLog(undefined,3); // 1, 3
myLog(param2=8); // 8 , 2 the reasignation is not posible again 
myLog(); // 1 ,2
```

####  9.2.3. <a name='LazyFunctions'></a>Lazy Functions
When we use a function  as a default value of a param it's declared but not executed inst:

```js
// Get the result 
function foo(){
	return "World"
}
function bar(name=foo()){// foo is used but it's not called
	console.log("hello "+ name);
}
bar("John");// foo still without be called
bar(); // foo is called
```

###  9.3. <a name='ArrowFunctions'></a>Arrow Functions
An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.
```js
// Transformation of function to arrow function;
var simplePlusOne = function (myParam){return myParam+1}
// Arrow version
var arrowPlusOne  = myParam   => myParam + 1;
//  Arrow multi varibles 
var arrowPlusMulti  = (firstParam,secondParam) => firstParam+secondParam;

```
##  10. <a name='This'></a>This
this is a dynamic  object that represent the actual object who calls a function, also exist a native method in any function to call a fsunction and change the This reference to another object.

```js
var person={
              name:"john",
              greet:function greet(param){
                console.log("Hello "+param+" my name is "+ this.name)
              }
            }
    person.greet('bird')//"Hello bird my name is john"
var marie={name:"marie"}
    person.greet.call(marie,'dog')//"Hello dog my name is marie" 
``` 

##  11. <a name='Scope'></a>Scope
The scope is the "domain" where a variable can be found. It have a flexible hierarchy.
the global scope can be access by any child scope but the global can't acces to a child scope.
```
Global
│ 
│
└───Document
     | 
     └───function
     |   └───block  
     |   |   └───expresion
     |   |   └───function 
     |   └───expression 
     |   └───...
     └───block
     |  └───...
     |  └───...
     └───expression
```


###  11.1. <a name='Functionscope'></a>Function scope
The function create it's own scope and it's destroyed when the function excecution end unless does exist a reference to that (see more on [Closure](#Closure)).


```js
var scope="global"; 
function checkScope(){  
  var scope="local";
  var childScope="child"
  console.log(scope);  
  console.log(childScope);
}
  checkScope()//local child
  console.log(scope)//global
  console.log(childScope)
  /*"ReferenceError: 'childScope' is undefined"*/
```

###  11.2. <a name='Blockscope'></a>Block scope
The block scope is every scope of a block defined by "{}" except the function 
and can be excecuted or not.

```js
var scope=0;
for(var i=0;i<10;i++){  
  scope++;
  var forScope='scoped';
}
console.log(scope)
console.log(forScope)
```
```js
var scope="global"
if(true){
 var local="local"
}
else {
  var anotherLocal="else"//it's created but not assigned  
}
console.log(scope)//global
console.log(local)// local
console.log(anotherLocal)//undefined
```


###  11.3. <a name='ExpressionScopeIIFE'></a>Expression Scope IIFE
The expression inside of a parentesis "()" it's in another scope and it's interpreted as a parameter to be executed so if we use the call expression "()" will be executed. This kind of scope  run, when it stop the all variables inside will be destroyed.
```js
(function(){var expressionScoped="this will never be showed"})
console.log(expressionScoped)//error
```
```js
(function(){var expressionScoped="i'm global hidden"
console.log(expressionScoped)//"i'm global hidden"
})()
console.log(expressionScoped)//error
```
You can recover a var  from this scope  with a return. This practice is common to create a module  without nest the global scope
```js
var expressionResult= (function(){var expressionScoped="maybe you see me"
        return expressionScoped
})()
console.log(expressionResult)//"maybe you see me"
```

##  12. <a name='Hoisting'></a>Hoisting
The hoisting consist in a transparent action of the interpreter on the script  execution time where every definition of a variable is positioned in the begin of a scope. Be aware that the definition is relocated but not the assignation.
```js
console.log(defintion)//undefined
var definition= "i'm definded";
console.log(definition)// i'm defined
```
Keep in mind the rule of a function scope, you can acces to the father scope but not to the father can't access to child scope.
```js
console.log(defintion);//error
function define(){
console.log(definition);
var definition= "i'm definded"; 
}
define()//undefined
console.log(definition);// error
```
Now it's possible use "let" to declare a variable avoiding the hoisting.
```js
console.log(defintion)//error
let definition= "i'm definded";
console.log(definition)// i'm defined
```
This is helpful to use a function before theclare it.
```js
hello();//hello world
function hello(){
  console.log("hello world");
}
```


##  13. <a name='Closure'></a>Closure 
To understad understand the closure it's necessary remember the function scope rule, with this we can create a closure. A closure is a scope where the access is restricted.
```js
var scope="this is a global scope";
function checkScope(){
    var scope="local scope";
    return function(){
      return scope;
    }
}
console.log(checkScope())//"local scope"
console.log(scope)//"this is a global scope"
```
If the closure its implemented with the expression scope the result it's very interesting
```js
var scope=(
  function(){
    var localScope=0;
    var operations={
      add:function(){
        localScope++;
      },
      substract:function(){
        localScope--;
      },
      check:function(){
        console.log(localScope);
      }
    }
    return operations
  }
)()
scope.check()
scope.add()
scope.add()
scope.check()
scope.substract()
scope.check()
```
As you can see  this is a way to "private" a variable from the scope and it will exist all the time.
This look great but to still existing a problem. 
```js
var scope=(
  function(){
    var localScope=0;
    var operations={
      add:function(){
        localScope++;
      },
      substract:function(){
        localScope--;
      },
      check:function(){
        console.log(localScope);
      }
    }
    return operations
  }
)()
scope.check()
scope.add()
scope=0;
console.log(scope)// 0 
```
All our closured scope lost. To resolve this it's posible use "const" 
```js
const scope=(
  function(){
    var localScope=0;
    var operations={
      add:function(){
        localScope++;
      },
      substract:function(){
        localScope--;
      },
      check:function(){
        console.log(localScope);
      }
    }
    return operations
  }
)()
scope.check()
scope.add()
scope=0;//error
```
On this way our scope it's safe of modifications.PD: it's possible that opera mini and some transpilers like babbel or typescript had an error to try this solution.
##  14. <a name='Objects'></a>Objects
The object Object  is the base of every new Object but the best way to use is not created an instance it's better if the Object is used directly.
```js
var myObject={
  "this is my key":"this is my string value",
  name:"john"
}

console.log(Object.keys(myObject))
delete myObject['this is my key'];
console.log(Object.keys(myObject));
```
Note: in the example is used a property name with whitespaces for demostration only, it's not recommended use this style to declare properties on your code.

###  14.2. <a name='JSON'></a>JSON
The JSON means "Javascript Object Notation" and it's a particular way to declare objects.
```js
var Json={
  value:"My first value",
  "second":"My second value",
  "key with spaces":"you can use spaces for a key object",
  function jsonFunction(){
    return "also it's possible declare a function and the key it's the name of de function;
  },
  number:22  
}
// dot Notation
Json.value
Json."second"//Error Syntax
Json["second"]//Correct
Json["jsonFunction"]()//Correct
Json.jsonFunction()//Correct
Json[value]//Error value is not declared
delete Json.value //Possible but not recomended
```
A really important concept to understand about objects( included arrays) is the "reference".
```js
var myObject={
  property:"hello"
}
var objectReference=myObject;
console.log(objectReference.property)
objectReference.property=0;
console.log(myObject.property)//0 the original object was modified
```
Remember every time that you assign just a link or reference to the original object but there is not a new object created. By the moment doesn't exist 

##  15. <a name='Prototype'></a>Prototype 
The prototype is a property that is inheranced by the creator of the instanced object

```js
function Creator(message){
 this.message= message; 
}
Creator.prototype.say=function(){
  console.log(this.message);  
}

var instance= new Creator('hello world');
instance.say()

```
The difference between prototype and the direct properties of a function is that every instanced object  of the function create it's own properties that existed inside if the function and the prototype is the same for all so if you modify the prototype of the creator  it's modify the instanced inheranced property; the change will be reflected to all instances of that function.
```js
function Creator(message){
 this.message= message;
}
Creator.prototype.everyBodySeeThis="You can see me";

var instance= new Creator('hello world');
console.log(instance.everyBodySeeThis);

Creator.prototype.everyBodySeeThis=0;
console.log(instance.everyBodySeeThis)
```


##  16. <a name='StandardBuilt-inObjectMethods'></a>Standard Built-in Object Methods
The object Object like all built-in objects had it own functions to make some procedures easier. The most useful methods are:
```js
//Get the keynames of a project.
var myObject={
  foo:"hello",
  bar:"john"
}
Object.keys(myObject)// ["foo","bar"]
Object.values(myObject)// ["hello","john"]

```

##  17. <a name='StandardBuilt-inArrayMethods'></a>Standard Built-in Array Methods
Any array have inheranced methods to interact with it 
```js
var myArray=[1,2,3,4,5]
myArray.map(function(item,index,array){
console.log(item,index,array)
return item*2
});//return a new array of  returned values inside of the callback
myArray.forEach(function(item, index, array) {
  console.log(item, index);
});


 myArray.pop(); // remove last item (from the end) and return the item
myArray.shift(); // remove the first element from the front and return the item
myArray.unshift(10) // add to the front the parameter 
myArray.indexOf(10)// return the index where is located the parameter inside the array, or -1 in case of don't find it.

```

##  18. <a name='MethodChaining'></a>Method Chaining 
When we are handling with some object it's posible chain a function width other compatible with it's result.
```js
var myArray=[1,2,3,4,5]


})//[undefined, 2, undefined, 4, undefined]

```
##  19. <a name='UseStrict'></a>Use Strict
The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5).
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
'use strict' is a directive to improve our codes and help to prevent common mistakes maded by some unrestrictions of the language. This directive should to be declared in the scope that we want to implement it. 
```js
//global scoping 
function foo(){
a=0;
console.log(a);// 0; a is created on the global scope
}
foo();
function bar(){
'use strict';
b=0;
console.log(b);//error; b is assigned but never declared;
}
bar();
```

```js
//protect future keywords
(function interface(){
  var implements= "hello";
  var private="i'm private";
})()
(function interface(){
  'use strict'
  var implements= "hello";//reserved word
  var private="i'm private";//reserved word
})()
```



# Note: 
All the clean code steps will be implicits on the code examples, for more detailed info please visit [Idiomatic clean code](https://github.com/rwaldron/idiomatic.js)