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
* 8. [Use Strict](#UseStrict)
* 9. [Arrays](#Arrays)
	* 9.1. [Predefined Array Functions](#PredefinedArrayFunctions)
* 10. [Functions](#Functions)
	* 10.1. [Defined Function](#DefinedFunction)
		* 10.1.1. [Arguments](#Arguments)
		* 10.1.2. [Default Parametters](#DefaultParametters)
		* 10.1.3. [Lazy Functions](#LazyFunctions)
	* 10.2. [Anonymous Functions](#AnonymousFunctions)
	* 10.3. [Arrow Functions](#ArrowFunctions)
* 11. [This](#This)
* 12. [Scope](#Scope)
	* 12.1. [Function scope](#Functionscope)
	* 12.2. [Block scope](#Blockscope)
	* 12.3. [Expression scope](#Expressionscope)
* 13. [Hoisting](#Hoisting)
* 14. [Closure](#Closure)
* 15. [Function Binding](#FunctionBinding)
* 16. [Objects](#Objects)
	* 16.1. [Json](#Json)
	* 16.2. [Object Object](#ObjectObject)
	* 16.3. [Predefined object functions](#Predefinedobjectfunctions)
* 17. [Prototype](#Prototype)
* 18. [Method Chaining](#MethodChaining)
* 19. [Object Literals](#ObjectLiterals)
* 20. [The Module Pattern](#TheModulePattern)
* 21. [Module Pattern Variations](#ModulePatternVariations)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->Introduction to JS
===================

# Introduction
##  1. <a name='Variables'></a>Variables
Variables are containers that you can store values in. You start by declaring a variable with the var keyword, followed by any name you want to call it:
```js
//Declaration of  undefined value
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
//Assigment Operator
var x,y=10;
  x =    y //Assignment
  x +=   y //Addition assignment       x = x + y
  x -=   y //Subtraction assignment    x = x - y
  x *=   y //Multiplication assignment x = x * y
  x /=   y //Division assignment       x = x / y
  x %=   y //Remainder assignment      x = x % y
  x **=  y //Exponentiation assignment x = x ** y 
  x <<=  y //Left shift assignment     x = x << y
  x >>=  y //Right shift assignment    x = x >> y
  x >>>= y //Unsigned right shift assignment x = x >>> y
  x &=   y //Bitwise AND assignment    x = x & y
  x ^=   y //Bitwise XOR assignment    x = x ^ y
  x |=   y //Bitwise OR assignment     x = x | y

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

Syntax
condition ? expr1 : expr2 
```js
var isThisConditional=true;
(isThisConditional) ? 'return on true':'return this section on false';
```
Multiple ternary evaluations are also possible (note: the conditional operator is right associative):
```js
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';
  
console.log(access); // logs "Access granted"
```
You can also use multiple conditions like in a multiple-conditions IF statement
```js
var condition1 = true,
    condition2 = false,
    access = condition1 ? (condition2 ? "true true": "true false") : (condition2 ? "false true" : "false false");

console.log(access); // logs "true false"
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

for (let iterator=0; iterator<=limit; iterator++){
  // Statement(s) to be executed if test condition is true
}
```


##  8. <a name='UseStrict'></a>Use Strict
The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5).
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.


##  9. <a name='Arrays'></a>Arrays
An array is an ordered collection of data (either primitive or object depending upon the language). Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value. 

Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods. 

What an array in JavaScript looks like:
```js
var myArray = [1, 2, 3, 4];

var catNamesArray = ["Jacqueline", "Sophia", "Autumn"];

//Arrays in JavaScript can hold different types of data, as shown above.
```
###  9.1. <a name='PredefinedArrayFunctions'></a>Predefined Array Functions

##  10. <a name='Functions'></a>Functions
###  10.2. <a name='AnonymousFunctions'></a>Anonymous Functions
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

###  10.1. <a name='DefinedFunction'></a>Defined Function

####  10.1.1. <a name='Arguments'></a>Arguments
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

####  10.1.2. <a name='DefaultParametters'></a>Default Parametters

```js
function myLog(param1=1,param2=2){
	console.log(param1+" , "+param2)
}
myLog(5,10); // 5 , 10
myLog(undefined,3); // 1, 3
myLog(param2=8); // 8 , 2 the reasignation is not posible again 
myLog(); // 1 ,2
```

####  10.1.3. <a name='LazyFunctions'></a>Lazy Functions
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

###  10.3. <a name='ArrowFunctions'></a>Arrow Functions
An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.
```js
// Transformation of function to arrow function;
var simplePlusOne = function (myParam){return myParam+1}
// Arrow version
var arrowPlusOne  = myParam   => myParam + 1;
//  Arrow multi varibles 
var arrowPlusMulti  = (firstParam,secondParam) => firstParam+secondParam;

```
##  11. <a name='This'></a>This

##  12. <a name='Scope'></a>Scope

###  12.1. <a name='Functionscope'></a>Function scope

###  12.2. <a name='Blockscope'></a>Block scope

###  12.3. <a name='Expressionscope'></a>Expression scope 

##  13. <a name='Hoisting'></a>Hoisting

##  14. <a name='Closure'></a>Closure 

##  15. <a name='FunctionBinding'></a>Function Binding

##  16. <a name='Objects'></a>Objects

###  16.1. <a name='Json'></a>Json

###  16.2. <a name='ObjectObject'></a>Object Object

###  16.3. <a name='Predefinedobjectfunctions'></a>Predefined object functions 

##  17. <a name='Prototype'></a>Prototype 

##  18. <a name='MethodChaining'></a>Method Chaining 

##Standard Built-in Object Methods

##Standard Built-in Array Methods

# Functional Programming


# Modules Pattern
##  19. <a name='ObjectLiterals'></a>Object Literals
##  20. <a name='TheModulePattern'></a>The Module Pattern
##  21. <a name='ModulePatternVariations'></a>Module Pattern Variations

# Note: 
All the clean code steps will be implicits on the code examples, for more detailed info please visit [Idiomatic clean code](https://github.com/rwaldron/idiomatic.js)