<!-- vscode-markdown-toc -->
* 1. [Variables](#Variables)
* 2. [Loose Typing](#LooseTyping)
* 3. [Operators](#Operators)
* 4. [Coersion](#Coersion)
	* 4.1. [NaN](#NaN)
* 5. [Conditionals](#Conditionals)
	* 5.1. [ IF/else](#IFelse)
	* 5.2. [Switch](#Switch)
* 6. [Template Literals](#TemplateLiterals)
* 7. [Loops](#Loops)
* 8. [Use Strict](#UseStrict)
* 9. [Arrays](#Arrays)
	* 9.1. [Predefined Array Functions](#PredefinedArrayFunctions)
* 10. [Functions](#Functions)
	* 10.1. [Defined Function](#DefinedFunction)
		* 10.1.1. [Default Parametters](#DefaultParametters)
		* 10.1.2. [Lazy Functions](#LazyFunctions)
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
Also we can  declare objects that can collect another variables inside, thoose variables can be literals or another objects. In JS exist 2 kinds of objects: 
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
###  4.1. <a name='NaN'></a>NaN
The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number. If you try to make an invalid numeric operation you may have a NaN as return.
##  5. <a name='Conditionals'></a>Conditionals


###  5.1. <a name='IFelse'></a> IF/else

###  5.2. <a name='Switch'></a>Switch






##  6. <a name='TemplateLiterals'></a>Template Literals
Js can insert variables directly in to string template variables that is a kind of string but with the `` instead quotes.
```js
var myVariable = "John";
var message=`This is ${myVariable} name`;
console.log(message);// This is John name
```

##  7. <a name='Loops'></a>Loops


##  8. <a name='UseStrict'></a>Use Strict

##  9. <a name='Arrays'></a>Arrays

###  9.1. <a name='PredefinedArrayFunctions'></a>Predefined Array Functions

##  10. <a name='Functions'></a>Functions

###  10.1. <a name='DefinedFunction'></a>Defined Function

####  10.1.1. <a name='DefaultParametters'></a>Default Parametters

####  10.1.2. <a name='LazyFunctions'></a>Lazy Functions


###  10.2. <a name='AnonymousFunctions'></a>Anonymous Functions
###  10.3. <a name='ArrowFunctions'></a>Arrow Functions
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