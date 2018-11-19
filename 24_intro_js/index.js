// What does this do?
// Sends a message to the console, message is "Hello World"
// console.log("Hello World")


// Data Types
// Boolean (true or false)
// Object ( { "key": "value", "key2": "key3": 4 }   )
// Numbers 4, 4.312, 0
// null -> Manipulating HTML, more like memory space
// undefined -> Value hasn't been defined
// String "Hello World"



// Problem 1, I want to
// add two variables together

var firstNumber = 10
var secondNumber = 20

var result = firstNumber + secondNumber

// console.log("The combination of firstNumber and secondNumber is", result)

/*
 Multi Line comment
 def someFunctionName(cake, cookies)
  cake + cookies
 end
*/

// Placeholders for the function are,
// firstNumber and secondNumber
function add(firstNumber, secondNumber){

  // Explicitly
  return firstNumber + secondNumber
}

function thatPrints(){
  console.log("Wow Prince, why would you do this?")
  console.log("Wow, a second action?")
}



// Which of the keywords do you use to define a variable?

// var
// let
// const

/* var is unrestictive, can do whatever
var name = "Prince"

name = "Prince"


console.log(name)
*/

// let name = "Prince"
// name = "Graham"
//
// console.log(name)
// let name = "Greg"

// Const -> Can never reassigned
// MUST BE ASSIGNED WHEN DECLARED
// const name = "Prince"
// name = "Graham"

// Problem 2
// Write a function that takes in an array of values
// and doubles the values throughout the array and return the new array back

// First build a function, takes in an argument of an array
// Goes through each part of the array; an iteration; a loop
// As we go through the loop, we double the values
// Return the new array

let inputArray = [5,10,2,500]



function doubler(beef){
  let outputArray = beef.slice() // Makes a new reference
  // debugger
  for(let i = 0; i < outputArray.length; i++ ){
    // outputArray[i] *= outputArray[i]
    outputArray[i] = outputArray[i] * outputArray[i]
  }

  return outputArray
  // Input [5,10,2,500]
  // Output [25, 100, 4, 250000]
}





// function doubler(newArray){
//   let outputArray = []
//   for(let i = 0; i < newArray.length; i++ ){
//     outputArray.push(newArray[i] * newArray[i])
//   }
//
//   return outputArray
//   // Input [5,10,2,500]
//   // Output [25, 100, 4, 250000]
// }








//
