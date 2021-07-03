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
