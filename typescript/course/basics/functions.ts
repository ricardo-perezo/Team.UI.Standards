//functions return type
function returnNumber(param:number):number{
return param;
}


//function structure type
let myAdd: (baseValue: number, increment: number) => number;

myAdd = function add(somenumber:number, anothernumber) 
{ return somenumber+anothernumber; };

//function spread arguments
function foo(x:number,...args:number[]):number{    
    return x;
}
// optional parameters
function optionalparam(primary:string,optional?:string):void{
    if(optional)
    console.log(`${primary} ${optional}`)        
    else
    console.log(`${primary}`)        
}
