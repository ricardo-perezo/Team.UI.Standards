<!-- vscode-markdown-toc -->
* 1. [Variables](#Variables)
* 2. [Loose Typing](#LooseTyping)
* 3. [Coersion](#Coersion)
* 4. [Conditionals](#Conditionals)
* 5. [Template Literals](#TemplateLiterals)
* 6. [Loops](#Loops)
* 7. [Use Strict](#UseStrict)
* 8. [Arrays](#Arrays)
	* 8.1. [Predefined Array Functions](#PredefinedArrayFunctions)
* 9. [Functions](#Functions)
	* 9.1. [Defined Function](#DefinedFunction)
		* 9.1.1. [Default Parametters](#DefaultParametters)
		* 9.1.2. [Lazy Functions](#LazyFunctions)
	* 9.2. [Anonymous Functions](#AnonymousFunctions)
	* 9.3. [Arrow Functions](#ArrowFunctions)
* 10. [This](#This)
* 11. [Scope](#Scope)
	* 11.1. [Function scope](#Functionscope)
	* 11.2. [Block scope](#Blockscope)
	* 11.3. [Expression scope](#Expressionscope)
* 12. [Hoisting](#Hoisting)
* 13. [Closure](#Closure)
* 14. [Function Binding](#FunctionBinding)
* 15. [Objects](#Objects)
	* 15.1. [Json](#Json)
	* 15.2. [Object Object](#ObjectObject)
	* 15.3. [Predefined object functions](#Predefinedobjectfunctions)
* 16. [Prototype](#Prototype)
* 17. [Method Chaining](#MethodChaining)
* 18. [Object Literals](#ObjectLiterals)
* 19. [The Module Pattern](#TheModulePattern)
* 20. [Module Pattern Variations](#ModulePatternVariations)
* 21. [Let](#Let)
* 22. [Constats](#Constats)
* 23. [Scoping](#Scoping)
	* 23.1. [Block-Scoped Variables](#Block-ScopedVariables)
	* 23.2. [Block-Scoped Functions](#Block-ScopedFunctions)
	* 23.3. [Expression Bodies](#ExpressionBodies)
	* 23.4. [Statement Bodies](#StatementBodies)
	* 23.5. [Lexical this](#Lexicalthis)
	* 23.6. [Extended Parameter Handling](#ExtendedParameterHandling)
* 24. [Default Parameter Values](#DefaultParameterValues)
* 25. [Rest Parameter](#RestParameter)
* 26. [Spread Operator](#SpreadOperator)
* 27. [Template Literals](#TemplateLiterals-1)
* 28. [String Interpolation](#StringInterpolation)
* 29. [Custom Interpolation](#CustomInterpolation)
* 30. [Raw String Access](#RawStringAccess)
* 31. [Extended Literals](#ExtendedLiterals)
* 32. [Unicode String & RegExp Literal](#UnicodeStringRegExpLiteral)
* 33. [Enhanced Regular Expression](#EnhancedRegularExpression)
* 34. [Regular Expression Sticky Matching](#RegularExpressionStickyMatching)
* 35. [Enhanced Object Properties](#EnhancedObjectProperties)
* 36. [Property Shorthand](#PropertyShorthand)
* 37. [Computed Property Names](#ComputedPropertyNames)
* 38. [Method Properties](#MethodProperties)
* 39. [Destructuring Assignment](#DestructuringAssignment)
* 40. [Array Matching](#ArrayMatching)
* 41. [Object Matching, Shorthand Notation](#ObjectMatchingShorthandNotation)
* 42. [Object Matching, Deep Matching](#ObjectMatchingDeepMatching)
* 43. [Object And Array Matching, Default Values](#ObjectAndArrayMatchingDefaultValues)
* 44. [Parameter Context Matching](#ParameterContextMatching)
* 45. [Fail-Soft Destructuring](#Fail-SoftDestructuring)
* 46. [Modules](#Modules)
* 47. [Value Export/Import](#ValueExportImport)
* 48. [Default & Wildcard](#DefaultWildcard)
* 49. [Classes](#Classes)
	* 49.1. [Class Definition](#ClassDefinition)
	* 49.2. [Class Inheritance](#ClassInheritance)
* 50. [Static Members](#StaticMembers)
* 51. [Getter/Setter](#GetterSetter)
* 52. [Symbol Type](#SymbolType)
* 53. [Global Symbols](#GlobalSymbols)
* 54. [Iterators](#Iterators)
* 55. [Iterator & For-Of Operator](#IteratorFor-OfOperator)
* 56. [Generators](#Generators)
* 57. [Generator Function, Iterator Protocol](#GeneratorFunctionIteratorProtocol)
* 58. [Generator Function, Direct Use](#GeneratorFunctionDirectUse)
* 59. [Generator Matching](#GeneratorMatching)
* 60. [Generator Control-Flow](#GeneratorControl-Flow)
* 61. [Generator Methods](#GeneratorMethods)
* 62. [Map/Set & WeakMap/WeakSet](#MapSetWeakMapWeakSet)
* 63. [Set Data-Structure](#SetData-Structure)
* 64. [Map Data-Structure](#MapData-Structure)
* 65. [Weak-Link Data-Structures](#Weak-LinkData-Structures)
* 66. [Typed Arrays](#TypedArrays)
* 67. [Typed Arrays](#TypedArrays-1)
* 68. [New Built-In Methods](#NewBuilt-InMethods)
* 69. [Object Property Assignment](#ObjectPropertyAssignment)
* 70. [Array Element Finding](#ArrayElementFinding)
* 71. [String Repeating](#StringRepeating)
* 72. [String Searching](#StringSearching)
* 73. [Number Type Checking](#NumberTypeChecking)
* 74. [Number Safety Checking](#NumberSafetyChecking)
* 75. [Number Comparison](#NumberComparison)
* 76. [Number Truncation](#NumberTruncation)
* 77. [Number Sign Determination](#NumberSignDetermination)
* 78. [Promises](#Promises)

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
The JS compiler interpret the string 

##  4. <a name='Conditionals'></a>Conditionals
##  5. <a name='TemplateLiterals'></a>Template Literals
Js can insert variables directly in to templates variables that is a kind of string but with the `` instead quotes.
```js
var myVariable = "Alan";
var message=`this is ${myVariable} name`;
console.log(message);
```

##  6. <a name='Loops'></a>Loops


##  7. <a name='UseStrict'></a>Use Strict

##  8. <a name='Arrays'></a>Arrays

###  8.1. <a name='PredefinedArrayFunctions'></a>Predefined Array Functions

##  9. <a name='Functions'></a>Functions

###  9.1. <a name='DefinedFunction'></a>Defined Function

####  9.1.1. <a name='DefaultParametters'></a>Default Parametters

####  9.1.2. <a name='LazyFunctions'></a>Lazy Functions


###  9.2. <a name='AnonymousFunctions'></a>Anonymous Functions
###  9.3. <a name='ArrowFunctions'></a>Arrow Functions
##  10. <a name='This'></a>This
##  11. <a name='Scope'></a>Scope
###  11.1. <a name='Functionscope'></a>Function scope
###  11.2. <a name='Blockscope'></a>Block scope
###  11.3. <a name='Expressionscope'></a>Expression scope 
##  12. <a name='Hoisting'></a>Hoisting
##  13. <a name='Closure'></a>Closure 
##  14. <a name='FunctionBinding'></a>Function Binding
##  15. <a name='Objects'></a>Objects
###  15.1. <a name='Json'></a>Json
###  15.2. <a name='ObjectObject'></a>Object Object
###  15.3. <a name='Predefinedobjectfunctions'></a>Predefined object functions 
##  16. <a name='Prototype'></a>Prototype 
##  17. <a name='MethodChaining'></a>Method Chaining 
##Standard Built-in Object Methods
##Standard Built-in Array Methods
# Functional Programming

# Modules Pattern
##  18. <a name='ObjectLiterals'></a>Object Literals
##  19. <a name='TheModulePattern'></a>The Module Pattern
##  20. <a name='ModulePatternVariations'></a>Module Pattern Variations

# ES6 
##  21. <a name='Let'></a>Let
##  22. <a name='Constats'></a>Constats
##  23. <a name='Scoping'></a>Scoping
###  23.1. <a name='Block-ScopedVariables'></a>Block-Scoped Variables
###  23.2. <a name='Block-ScopedFunctions'></a>Block-Scoped Functions
###  23.3. <a name='ExpressionBodies'></a>Expression Bodies
###  23.4. <a name='StatementBodies'></a>Statement Bodies
###  23.5. <a name='Lexicalthis'></a>Lexical this
###  23.6. <a name='ExtendedParameterHandling'></a>Extended Parameter Handling
##  24. <a name='DefaultParameterValues'></a>Default Parameter Values
##  25. <a name='RestParameter'></a>Rest Parameter
##  26. <a name='SpreadOperator'></a>Spread Operator
##  27. <a name='TemplateLiterals-1'></a>Template Literals
##  28. <a name='StringInterpolation'></a>String Interpolation
##  29. <a name='CustomInterpolation'></a>Custom Interpolation
##  30. <a name='RawStringAccess'></a>Raw String Access
##  31. <a name='ExtendedLiterals'></a>Extended Literals
##  32. <a name='UnicodeStringRegExpLiteral'></a>Unicode String & RegExp Literal
##  33. <a name='EnhancedRegularExpression'></a>Enhanced Regular Expression
##  34. <a name='RegularExpressionStickyMatching'></a>Regular Expression Sticky Matching
##  35. <a name='EnhancedObjectProperties'></a>Enhanced Object Properties
##  36. <a name='PropertyShorthand'></a>Property Shorthand
##  37. <a name='ComputedPropertyNames'></a>Computed Property Names
##  38. <a name='MethodProperties'></a>Method Properties
##  39. <a name='DestructuringAssignment'></a>Destructuring Assignment
##  40. <a name='ArrayMatching'></a>Array Matching
##  41. <a name='ObjectMatchingShorthandNotation'></a>Object Matching, Shorthand Notation
##  42. <a name='ObjectMatchingDeepMatching'></a>Object Matching, Deep Matching
##  43. <a name='ObjectAndArrayMatchingDefaultValues'></a>Object And Array Matching, Default Values
##  44. <a name='ParameterContextMatching'></a>Parameter Context Matching
##  45. <a name='Fail-SoftDestructuring'></a>Fail-Soft Destructuring
##  46. <a name='Modules'></a>Modules
##  47. <a name='ValueExportImport'></a>Value Export/Import
##  48. <a name='DefaultWildcard'></a>Default & Wildcard
##  49. <a name='Classes'></a>Classes
###  49.1. <a name='ClassDefinition'></a>Class Definition
###  49.2. <a name='ClassInheritance'></a>Class Inheritance
##  50. <a name='StaticMembers'></a>Static Members
##  51. <a name='GetterSetter'></a>Getter/Setter
##  52. <a name='SymbolType'></a>Symbol Type
##  53. <a name='GlobalSymbols'></a>Global Symbols
##  54. <a name='Iterators'></a>Iterators
##  55. <a name='IteratorFor-OfOperator'></a>Iterator & For-Of Operator
##  56. <a name='Generators'></a>Generators
##  57. <a name='GeneratorFunctionIteratorProtocol'></a>Generator Function, Iterator Protocol
##  58. <a name='GeneratorFunctionDirectUse'></a>Generator Function, Direct Use
##  59. <a name='GeneratorMatching'></a>Generator Matching
##  60. <a name='GeneratorControl-Flow'></a>Generator Control-Flow
##  61. <a name='GeneratorMethods'></a>Generator Methods
##  62. <a name='MapSetWeakMapWeakSet'></a>Map/Set & WeakMap/WeakSet
##  63. <a name='SetData-Structure'></a>Set Data-Structure
##  64. <a name='MapData-Structure'></a>Map Data-Structure
##  65. <a name='Weak-LinkData-Structures'></a>Weak-Link Data-Structures
##  66. <a name='TypedArrays'></a>Typed Arrays
##  67. <a name='TypedArrays-1'></a>Typed Arrays
##  68. <a name='NewBuilt-InMethods'></a>New Built-In Methods
##  69. <a name='ObjectPropertyAssignment'></a>Object Property Assignment
##  70. <a name='ArrayElementFinding'></a>Array Element Finding
##  71. <a name='StringRepeating'></a>String Repeating
##  72. <a name='StringSearching'></a>String Searching
##  73. <a name='NumberTypeChecking'></a>Number Type Checking
##  74. <a name='NumberSafetyChecking'></a>Number Safety Checking
##  75. <a name='NumberComparison'></a>Number Comparison
##  76. <a name='NumberTruncation'></a>Number Truncation
##  77. <a name='NumberSignDetermination'></a>Number Sign Determination
##  78. <a name='Promises'></a>Promises
# Note: 
All the clean code steps will be implicits on the code examples, for more detailed info please visit [Idiomatic clean code](https://github.com/rwaldron/idiomatic.js)