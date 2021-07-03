// ***************************
// Constructor, operator "new"
// ***************************

// The regular {...} syntax allows to create one object.
// But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

// ****** Constructor function *******

// Constructor functions technically are regular functions. There are two conventions though:

// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator.

// Example
function User(name) {
  // this = {}; implicitly

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this; implicitly
}

let user1 = new User('Jennifer');
// console.log(user1.name);    // Jennifer
// console.log(user1.isAdmin);   // false

// When a function is executed with new, it does the following steps:

// a. A new empty object is created and assigned to this.
// b. The function body executes. Usually it modifies this, adds new properties to it.
// c. The value of this is returned.

// the example given above does the same as:

`
let user1 = {
  name : "Jennifer",
  isAdmin: false
}
`;

// to create other user, we can call
let user3 = new User('Augusta');
let user4 = new User('Alisha');

// and so on.
// Much shorter than using literals every time, and alse easy to read.
// The is the main purpose of constructors - to implement reusable object creation code.

// ******* new function() {...} **********

// If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

// create a function and immediately call it with new

let user = new function() {
  this.name = 'Jason';
  this.isAdmin = false;

  // ... other code for user creation
  // may be complex logic and statements
  // local variables etc.
}();

// This constructor can't be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

// ***** Omitting parentheses *******

// By the way, we can omit parentheses after new, if it has no arguments:

let user5 = new User(); // parenthesee is required which is same as `let user5 = new User();

// Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification.

// ********* Methods in constructor ***********

// Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

// Of course, we can add to this not only properties, but methods as well.

// For instance, new User(name) below creates an object with the given name and the method sayHi:

function Employee(name) {
  this.name = name;

  this.sayHi = function() {
    console.log('My name is: ' + this.name);
  };
}

let employee1 = new Employee('Benjamin');
console.log(employee1.sayHi()); // My name is: Benjamin

