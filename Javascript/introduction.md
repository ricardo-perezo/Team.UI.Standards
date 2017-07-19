<!-- vscode-markdown-toc -->
* 1. [Variables](#Variables)
* 2. [Loose Typing](#LooseTyping)
* 3. [Coersion](#Coersion)
	* 3.1. [NaN](#NaN)
* 4. [Operators](#Operators)
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
* 22. [Let](#Let)
* 23. [Constats](#Constats)
* 24. [Scoping](#Scoping)
	* 24.1. [Block-Scoped Variables](#Block-ScopedVariables)
	* 24.2. [Block-Scoped Functions](#Block-ScopedFunctions)
	* 24.3. [Expression Bodies](#ExpressionBodies)
	* 24.4. [Statement Bodies](#StatementBodies)
	* 24.5. [Lexical this](#Lexicalthis)
	* 24.6. [Extended Parameter Handling](#ExtendedParameterHandling)
* 25. [Default Parameter Values](#DefaultParameterValues)
* 26. [Rest Parameter](#RestParameter)
* 27. [Spread Operator](#SpreadOperator)
* 28. [Template Literals](#TemplateLiterals-1)
* 29. [String Interpolation](#StringInterpolation)
* 30. [Custom Interpolation](#CustomInterpolation)
* 31. [Raw String Access](#RawStringAccess)
* 32. [Extended Literals](#ExtendedLiterals)
* 33. [Unicode String & RegExp Literal](#UnicodeStringRegExpLiteral)
* 34. [Enhanced Regular Expression](#EnhancedRegularExpression)
* 35. [Regular Expression Sticky Matching](#RegularExpressionStickyMatching)
* 36. [Enhanced Object Properties](#EnhancedObjectProperties)
* 37. [Property Shorthand](#PropertyShorthand)
* 38. [Computed Property Names](#ComputedPropertyNames)
* 39. [Method Properties](#MethodProperties)
* 40. [Destructuring Assignment](#DestructuringAssignment)
* 41. [Array Matching](#ArrayMatching)
* 42. [Object Matching, Shorthand Notation](#ObjectMatchingShorthandNotation)
* 43. [Object Matching, Deep Matching](#ObjectMatchingDeepMatching)
* 44. [Object And Array Matching, Default Values](#ObjectAndArrayMatchingDefaultValues)
* 45. [Parameter Context Matching](#ParameterContextMatching)
* 46. [Fail-Soft Destructuring](#Fail-SoftDestructuring)
* 47. [Modules](#Modules)
* 48. [Value Export/Import](#ValueExportImport)
* 49. [Default & Wildcard](#DefaultWildcard)
* 50. [Classes](#Classes)
	* 50.1. [Class Definition](#ClassDefinition)
	* 50.2. [Class Inheritance](#ClassInheritance)
* 51. [Static Members](#StaticMembers)
* 52. [Getter/Setter](#GetterSetter)
* 53. [Symbol Type](#SymbolType)
* 54. [Global Symbols](#GlobalSymbols)
* 55. [Iterators](#Iterators)
* 56. [Iterator & For-Of Operator](#IteratorFor-OfOperator)
* 57. [Generators](#Generators)
* 58. [Generator Function, Iterator Protocol](#GeneratorFunctionIteratorProtocol)
* 59. [Generator Function, Direct Use](#GeneratorFunctionDirectUse)
* 60. [Generator Matching](#GeneratorMatching)
* 61. [Generator Control-Flow](#GeneratorControl-Flow)
* 62. [Generator Methods](#GeneratorMethods)
* 63. [Map/Set & WeakMap/WeakSet](#MapSetWeakMapWeakSet)
* 64. [Set Data-Structure](#SetData-Structure)
* 65. [Map Data-Structure](#MapData-Structure)
* 66. [Weak-Link Data-Structures](#Weak-LinkData-Structures)
* 67. [Typed Arrays](#TypedArrays)
* 68. [Typed Arrays](#TypedArrays-1)
* 69. [New Built-In Methods](#NewBuilt-InMethods)
* 70. [Object Property Assignment](#ObjectPropertyAssignment)
* 71. [Array Element Finding](#ArrayElementFinding)
* 72. [String Repeating](#StringRepeating)
* 73. [String Searching](#StringSearching)
* 74. [Number Type Checking](#NumberTypeChecking)
* 75. [Number Safety Checking](#NumberSafetyChecking)
* 76. [Number Comparison](#NumberComparison)
* 77. [Number Truncation](#NumberTruncation)
* 78. [Number Sign Determination](#NumberSignDetermination)
* 79. [Promises](#Promises)

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

##  3. <a name='Coersion'></a>Coersion
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
###  3.1. <a name='NaN'></a>NaN
The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number. If you try to make an invalid numeric operation you may have a NaN as return.
##  4. <a name='Operators'></a>Operators

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

# ES6 
##  22. <a name='Let'></a>Let
##  23. <a name='Constats'></a>Constats
##  24. <a name='Scoping'></a>Scoping
###  24.1. <a name='Block-ScopedVariables'></a>Block-Scoped Variables
###  24.2. <a name='Block-ScopedFunctions'></a>Block-Scoped Functions
###  24.3. <a name='ExpressionBodies'></a>Expression Bodies
###  24.4. <a name='StatementBodies'></a>Statement Bodies
###  24.5. <a name='Lexicalthis'></a>Lexical this
###  24.6. <a name='ExtendedParameterHandling'></a>Extended Parameter Handling
##  25. <a name='DefaultParameterValues'></a>Default Parameter Values
##  26. <a name='RestParameter'></a>Rest Parameter
##  27. <a name='SpreadOperator'></a>Spread Operator
##  28. <a name='TemplateLiterals-1'></a>Template Literals
##  29. <a name='StringInterpolation'></a>String Interpolation
##  30. <a name='CustomInterpolation'></a>Custom Interpolation
##  31. <a name='RawStringAccess'></a>Raw String Access
##  32. <a name='ExtendedLiterals'></a>Extended Literals
##  33. <a name='UnicodeStringRegExpLiteral'></a>Unicode String & RegExp Literal
##  34. <a name='EnhancedRegularExpression'></a>Enhanced Regular Expression
##  35. <a name='RegularExpressionStickyMatching'></a>Regular Expression Sticky Matching
##  36. <a name='EnhancedObjectProperties'></a>Enhanced Object Properties
##  37. <a name='PropertyShorthand'></a>Property Shorthand
##  38. <a name='ComputedPropertyNames'></a>Computed Property Names
##  39. <a name='MethodProperties'></a>Method Properties
##  40. <a name='DestructuringAssignment'></a>Destructuring Assignment
##  41. <a name='ArrayMatching'></a>Array Matching
##  42. <a name='ObjectMatchingShorthandNotation'></a>Object Matching, Shorthand Notation
##  43. <a name='ObjectMatchingDeepMatching'></a>Object Matching, Deep Matching
##  44. <a name='ObjectAndArrayMatchingDefaultValues'></a>Object And Array Matching, Default Values
##  45. <a name='ParameterContextMatching'></a>Parameter Context Matching
##  46. <a name='Fail-SoftDestructuring'></a>Fail-Soft Destructuring
##  47. <a name='Modules'></a>Modules
##  48. <a name='ValueExportImport'></a>Value Export/Import
##  49. <a name='DefaultWildcard'></a>Default & Wildcard
##  50. <a name='Classes'></a>Classes
###  50.1. <a name='ClassDefinition'></a>Class Definition
###  50.2. <a name='ClassInheritance'></a>Class Inheritance
##  51. <a name='StaticMembers'></a>Static Members
##  52. <a name='GetterSetter'></a>Getter/Setter
##  53. <a name='SymbolType'></a>Symbol Type
##  54. <a name='GlobalSymbols'></a>Global Symbols
##  55. <a name='Iterators'></a>Iterators
##  56. <a name='IteratorFor-OfOperator'></a>Iterator & For-Of Operator
##  57. <a name='Generators'></a>Generators
##  58. <a name='GeneratorFunctionIteratorProtocol'></a>Generator Function, Iterator Protocol
##  59. <a name='GeneratorFunctionDirectUse'></a>Generator Function, Direct Use
##  60. <a name='GeneratorMatching'></a>Generator Matching
##  61. <a name='GeneratorControl-Flow'></a>Generator Control-Flow
##  62. <a name='GeneratorMethods'></a>Generator Methods
##  63. <a name='MapSetWeakMapWeakSet'></a>Map/Set & WeakMap/WeakSet
##  64. <a name='SetData-Structure'></a>Set Data-Structure
##  65. <a name='MapData-Structure'></a>Map Data-Structure
##  66. <a name='Weak-LinkData-Structures'></a>Weak-Link Data-Structures
##  67. <a name='TypedArrays'></a>Typed Arrays
##  68. <a name='TypedArrays-1'></a>Typed Arrays
##  69. <a name='NewBuilt-InMethods'></a>New Built-In Methods
##  70. <a name='ObjectPropertyAssignment'></a>Object Property Assignment
##  71. <a name='ArrayElementFinding'></a>Array Element Finding
##  72. <a name='StringRepeating'></a>String Repeating
##  73. <a name='StringSearching'></a>String Searching
##  74. <a name='NumberTypeChecking'></a>Number Type Checking
##  75. <a name='NumberSafetyChecking'></a>Number Safety Checking
##  76. <a name='NumberComparison'></a>Number Comparison
##  77. <a name='NumberTruncation'></a>Number Truncation
##  78. <a name='NumberSignDetermination'></a>Number Sign Determination
##  79. <a name='Promises'></a>Promises
# Note: 
All the clean code steps will be implicits on the code examples, for more detailed info please visit [Idiomatic clean code](https://github.com/rwaldron/idiomatic.js)