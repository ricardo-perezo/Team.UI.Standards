//functions return type
function returnNumber(param) {
    return param;
}
//function structure type
var myAdd;
myAdd = function add(somenumber, anothernumber) { return somenumber + anothernumber; };
//function spread arguments
function foo(x) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return x;
}
// optional parameters
function optionalparam(primary, optional) {
    if (optional)
        console.log(primary + " " + optional);
    else
        console.log("" + primary);
}
optionalparam('hello');
optionalparam('hello', 'world');
