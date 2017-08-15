#Solutions
This is not the unique solutions for the challenges, it's only a proposal for solutions. 
If you know a better optimizated solution we encouraged you to create a pull request with it.

## Fizz Buzz
```js
function fizzBuzz(parameter){
    if(parameter%3==0){
        return (parameter % 5==0)?'FizzBuzz':'Fizz';
    }
    else if(parameter % 5==0){
        return "Buzz";
    }
    else {
        return parameter;
    }
}

for(var i=1;i<=100;i++){
    console.log(fizzBuzz(i));
}

```

##Chess Board

```js
function drawChess(size){
  var lineEven="",lineOdd="";
  for(var column=1;column<=column;column++){
    if(column%2===0){
      lineEven+=" ";
      lineOdd+="#";
    }else{
      lineEven+="#";
      lineOdd+=" ";
    }
  }    
  for(var row=1;row<size;row++){
    console.log(lineEven);
    console.log(lineOdd);
  }  
}
drawChess(8);
```

## Palindrome
```js
function checkPalindrome(word){
    var trimmedWord=word.toLowerCase().split(" ").join("").split("");
    return trimmedWord.join("")===trimmedWord.reverse().join("");
}
```

## Game of Life
```js
//OH boy, seriusly you want the answer?
```