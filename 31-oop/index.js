/*
  Learnings of OOP
  - Relationships
  - Abstraction
  - Classes (defining similar behavior)
  - Inheritance
  - Instances
  - this
*/

// Key/Value Pair
// let fido = {
//   name: "Fido",
//   breed: "Australian Shephard",
//   age: 1,
// bark: function(){
//   return `${name} barks with joy!`
// }
// }

// let bolto = {
//   name: "Bolto",
//   breed: "Siberian Huskey",
//   age: 0.5,
// bark: function(){
//   return `${name} barks with joy!`
// }
// }

// function createDoggo(name, breed, age){
//   return {
//     name: name,
//     breed: breed,
//     age: age,
//     bark: function(){
//       return `${name} barks with joy!`
//     }
//   }
// }

// let fido = createDoggo("Fido", "Australian Shephard", 1)
// let bolto = createDoggo("Bolto", "Siberian Huskey", 0.5)

// function Dog(name, breed, age){
//  // new BINDS our execution context
//  // it tells us that this is bound to the object Dog
//  // So every time we refer to this, we are talking about {} (current dog)
//   this.name = name
//   this.breed = breed
//   this.age = age
// }

// Go back into the definition of Dog
// Add this as if it came with it already
// Dog.prototype.bark = function(){
//   console.log(`${this.name} barks with joy!`)
// }

// MOVED THE CLASS SYNTAX INTO dog.js

let fido = new Dog("Fido", "Australian Shephard", 1)
let bolto = new Dog("Bolto", "Siberian Huskey", 0.5)