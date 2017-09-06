#Typescript 


## Introduction.
### What it is?
Typescript it's a language that compiles into Javascript and try to prevent some of the most common issues made by the developers in the work time and add some of the new ecma standards to JS even though it's not completely supported by all browsers. 


### Why to use it?
Javascript was made originally to add some web page interactivity. Now Javascript it's the core language for the frontend development and some project like nodeJS and derivates and it have a lot of applications like web app servers, IoT, or drones manipulation etc.

Now the use of JS have good and bad parts some times those are the same. The loose of types the versatility, flexibility and the language freedom  can give some troubles to use it in scalable way. Here is where Typescript comes. Typescript are all those rules that help us to make scalable, readable and maintable code easily.

**Note**: This documentation is not a introduction to Programming, it only contains the diferences between Javascript and Typescript and how to use it. If you need deep into some theme we encourage you to read the Javascript docs ES5 and ES6, it'll necessary to undersand better some concepts that you may see on this document.


### Install
To be independent of any SO on this documentation is assumed that you have installed NodeJS also the node and npm commands works as on your terminal.

```shell
> npm install -g typescript
```

Now you have installed the typescript compiler.

### Compile A File 
With the terminal located in the folder where the file is located it's possible compile it with the command "tsc 'filetocomile.ts'.

For example 
We create the file greet.ts
```typescript
// path/to/folder/greet.ts
let greet = (x) => x;
greet('hello world');
```

```shell
> tsc greet.ts
```

In the same folder where is located the greet.ts file, the file greet.js should be created and ready to be executed by a js interpreter.
```js
// path/to/folder/greet.js
var greet = function (x) { return x; };
greet('hello world');
```

Also  automatize  this with gulp, grunt or webpack commands.


## Types.
An important tool of this language is the use of types in the variables, it help us to have a clear model of our data that we will use.You can use let, var and const  declarations.

The basic syntax to declare a variable it use
declaration name : type;
declaration name : type = value;


```ts
//classic types
var myNumber:number=22;
var myString:string="hello";
var anyvar:any="any";
var myArray: any [] = ["e",1,3,4];
var list: Array<number> = [1, 2, 3];
var isBoolean:boolean=true;
var tuple:[string,number]=["key",22]

//complex object 
let obj:{a:string, b: number,c:[string,string]};
```

Also it's possible add types in to a functions
```ts
//functions return type
function returnNumber(param:number):number{
return param;
}


//function structure type

let myAdd: (baseValue: number, increment: number)=> number;

myAdd = function add(somenumber:number, anothernumber){
     return somenumber+anothernumber;
     };

//function spread arguments
function spread(x:number, ...args:number[]):number{
    return x;
}
// optional parameters
function optionalparam(primary:string, optional?:string):void{
    if(optional)
    console.log(`${primary} ${optional}`)
    else
    console.log(`${primary}`)
}
```
some new types implemented on typescript are

### Enum

A helpful addition to the standard set of datatypes from JavaScript is the `enum`.
As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

By default, enums begin numbering their members starting at `0`.
You can change this by manually setting the value of one of its members.
For example, we can start the previous example at `1` instead of `0`:

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

Or, even manually set all the values in the enum:

```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum.
For example, if we had the value `2` but weren't sure what that mapped to in the `Color` enum above, we could look up the corresponding name:

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName);
```

### Any

We may need to describe the type of variables that we do not know when we are writing an application.
These values may come from dynamic content, e.g. from the user or a 3rd party library.
In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks.
To do so, we label these with the `any` type:

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

The `any` type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during compilation.
You might expect `Object` to play a similar role, as it does in other languages.
But variables of type `Object` only allow you to assign any value to them - you can't call arbitrary methods on them, even ones that actually exist:

```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

The `any` type is also handy if you know some part of the type, but perhaps not all of it.
For example, you may have an array but the array has a mix of different types:

```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```

### Void

`void` is a little like the opposite of `any`: the absence of having any type at all.
You may commonly see this as the return type of functions that do not return a value:

```ts
function warnUser(): void {
    alert("This is my warning message");
}
```

Declaring variables of type `void` is not useful because you can only assign `undefined` or `null` to them:

```ts
let unusable: void = undefined;
```

### Null and Undefined

In TypeScript, both `undefined` and `null` actually have their own types named `undefined` and `null` respectively.
Much like `void`, they're not extremely useful on their own:

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

By default `null` and `undefined` are subtypes of all other types.
That means you can assign `null` and `undefined` to something like `number`.

However, when using the `--strictNullChecks` flag, `null` and `undefined` are only assignable to `void` and their respective types.
This helps avoid *many* common errors.
In cases where you want to pass in either a `string` or `null` or `undefined`, you can use the union type `string | null | undefined`.
Once again, more on union types later on.

> As a note: we encourage the use of `--strictNullChecks` when possible, but for the purposes of this handbook, we will assume it is turned off.

### Never

The `never` type represents the type of values that never occur.
For instance, `never` is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns;
Variables also acquire the type `never` when narrowed by any type guards that can never be true.

The `never` type is a subtype of, and assignable to, every type; however, *no* type is a subtype of, or assignable to, `never` (except `never` itself).
Even `any` isn't assignable to `never`.

Some examples of functions returning `never`:

```ts
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```
## Classes 

