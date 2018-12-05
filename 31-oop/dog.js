const Dog = (function(){
  // Closure says that something is defined
  // and only accessible within the function
  // UNLESS MADE TO BE ACCESSED OUTSIDE
  let doggos = []
  return class Dog {
    constructor(name, breed,age){
      this.name = name
      // this => { }
      this.breed = breed
      this.age = age
      doggos.push(this)
    }

    // This is how we will define instance methods
    bark(){
      return `${this.name} barks with joy!`
    }

    // Class Method
    static all(){
      return doggos
    }
  }
})()


// IIFE - IMMEDIATELY INVOKING FUNCTION EXPRESSION