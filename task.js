// *********************************
// Tasks
// *********************************

// 1. Two functions – one object

// Is it possible to create functions A and B such as new A()==new B()?

// ***** Solution

// Yes, it’s possible.

// If a function returns an object then new returns it instead of this.

// So they can, for instance, return the same externally defined object obj:

let obj1 = {};

function A() {
  return obj1;
}

function B() {
  return obj1;
}

let a = new A();
let b = new B();
console.log(a == b); // true

// 2. Create new Calculator

// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
  this.read = function() {
    this.x = +prompt('First number: ');
    this.y = +prompt('Second number: ');
  };

  this.sum = function() {
    return this.x + this.y;
  };

  this.mul = function() {
    return this.x * this.y;
  };
}

let calculator1 = new Calculator();

// console.log(calculator1.read());  // if 11, 22 entered
// console.log(calculator1.sum());  // 33
// console.log(calculator1.mul());  // 242

