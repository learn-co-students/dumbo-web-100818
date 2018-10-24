**The `Zoo` model:**

- The `Zoo` class needs a class method `.all` that lists each zoo in the
  class variable.
- The `Zoo` class needs a class variable `@@all` that begins as an empty array.
- A zoo should be initialized with a name and be saved in the `@@all` array.
- The `Zoo` class needs an instance method, `#new_escape`, that takes in a
  an instance of the `Animal` class and a date, and creates a new escape. That
  escape should know that it belongs to the zoo
- The `Zoo` class needs an instance method, `#escapes`, that iterates
  through all appointments and finds those belonging to this zoo.
- The `Zoo` class needs an instance method, `#animals`, that iterates over
  that zoos's escapes and collects the animal that belongs to each
  escape.

**The `Escape` model:**

- The `Escape` class needs a class variable `@@all` that begins as an empty array.
- The `Escape` class needs a class method `.all` that lists each escape
  in the class variable.
- An escape should be initialized with a date (as a string, like `"Monday, August 1st"`), an animal, and a zoo. The escape should be saved in the
  `@@all` array.

**The `Animal` model:**

- The `Animal` class needs a class variable `@@all` that begins as an empty array.
- The `Animal` class needs a class method `.all` that lists each animal in the
  class variable.
- An animal is instantiated with a name and be saved in the `@@all` array.
- The `Animal` class needs an instance method, `#new_escape`, that takes in
  an argument of a zoo and a date and creates a new escape. The
  escape should know that it belongs to the animal.
- The `Animal` class needs an instance method, `#escapes`, that iterates
  through the escapes array and returns escapes that belong to the
  animal.
- The `Animal` class needs an instance method, `#zoos`, that iterates over
  that animal's escapes and collects the zoo that belongs to each
  escape.



