// The highest level of access is the global scope
// let name = "Prince"
//
// function method(){
//   // Role the variable is known as a local variable
//   // Accessible only within the function
//   // let role = "Instructor"
//   console.log("Inside of the function, but before reassigning:", name)
//   name = "Graham"
//
//   // Access to it inside of this function
//   console.log("After the execution of our function", name)
//
// }
//
// console.log("After the definition of our function:", name)



// function doThis(){
//   // Lexical Scoping
//   // Referencing right where I am written
//   var someVariable = "someValue"
// }
//
// doThis()


// Callbacks
// Call the function, return back the result
// They are the function inside of higher order functions


// Higher Order Functions
// NO "The Plastics" from Mean Girls
// Functions that take functions

// map, select, find, etc....


// [1,2,3,4].map do |number|
//  return number * number
// end

// let newArray = [1,2,3,4].map(function(number){
//   return number*number
// })
//
// console.log(newArray)


// Named function => It has a name after the function keyword
// function someCallback(number){
//   return number * number
// }
//
// let newArray = [1,2,3,4].map(someCallback)
//
// console.log(newArray)

function bananas(array, callback){
  return callback(array)
}



// Building a Higher Order Function
// In this case, we want to see how map works
[1,2,3,4].map(function(element){
  return element*element
})

function newMap(array, callback){
  // I go through my array
  // I do some manipulation
  // Show a new array with each element
  let newArray = []
  for(let i = 0; i < array.length; i++){
    let result = callback(array[i])
    newArray.push(result)
  }

  return newArray
}













// It will error
// It will print the name
// It will say its undefined
