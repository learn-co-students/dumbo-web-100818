# Object Oriented Programming in JavaScript

Things aren't too different from what we experience in Ruby! However, the biggest
thing in JavaScript to remember is that a [function are objects][1]!

We have multiple ways of creating objects and ultimately they all work but some
are more readable and extendable than others. The last thing we will be doing
will be the most prominent now though.

### Object Factory

```js
function createDog(dogName, dogBreed, dogAge){
  return {
    name: dogName,
    breed: dogBreed,
    age: dogAge,
    bark: function(){
      console.log(`${dogName} barks with joy!`)
    }
  }
}

let fido = createDog("Fido", "Corgi", 3)
```

### ES5 Constructor Function and Prototype

```js
function Dog(dogName, dogBreed, dogAge){
  this.name = dogName
  this.breed = dogBree
  this.age = dogAge
}

Dog.prototype.bark = function(){
  console.log(`${this.name} barks with joy!`)
}

let fido = new Dog("Fido", "Corgi", 3)
```


### ES6


[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions