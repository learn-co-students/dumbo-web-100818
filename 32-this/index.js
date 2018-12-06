// THIS

// self ish like from Ruby
// self "Where ever I am defined, will be told what value I am"

// this
// "Where ever I am EXECUTED, will be told what value I am"
function whoThis(){
  console.log("This is the value of this: ", this)
  // - The function
  // - The Window

  // The answer here is THE WINDOW. No bound execution context
}

// function Animal(name, species){
//   // Inside of an object
//   // This is...?
//   // - Object (animal)
//   // - The function
//
//   // The execution bound within an object
//   // So `this` is the object
//   return {
//     name: name,
//     species: species,
//     speak: function() {
//       console.log(`Salutations Human, my this value is: `, this)
//     }
//   }
// }

// class Animal {
//   constructor(name, species){
//     console.log('Salutations human, my value of this is: ', this) // this is still the object
//     this.name = name
//     this.species = species
//   }
// }


// function sayName(names){
//   // ["Beyonce", "Michelle", "Kyle", "Arren"]
//   names.forEach(function(name){
//     // This is :
//     // - Function with an argument
//     // - An array
//     // - element in array
//     // - undefined
//     // - Window
//     console.log('The value of this inside of a callback: ', this)
//     console.log("Here is my name:", name)
//   })
// }

// What is `this` when in the second then of `fetch`

function sayName(location, time) {
  return `${this.name} says hello from ${location} at ${time}!`
}

let person1 = {
  name: "Arren",
  role: "Instructor",
  // sayName: sayName // The equivalent of sayName.bind(person)() outside of the object
}

let person2 = {
  name: "Scott"
}

let person3 = {
  name: "Milan"
}


// .bind(<...>) - it takes in the execution context and returns a function BOUND by that execution context

// .call and .apply
// Both of these will return the value

// console.log(sayName.call(person)) // returns value

// console.log(sayName.apply(person)) // returns value


// Call uses an argument count
// console.log(sayName.call(person1, "Access Labs", "3:43PM"))

// Apply uses an array
// console.log(sayName.apply(person1, ["Access Labs", "3:43PM"]))
//
// function someName(){
//
// }

// ES6 Arrow Function

// let someVariable = () => {
//   return this
// }

// If you care about this, you want to use function expression
// document.addEventListener('click', () => {
//   console.log('What is this? ', this)
// })

let names = ['Beyonce', 'Michelle', 'Rihanna']

names.forEach((name) => {
  console.log('this is some value: ', this)
})












//