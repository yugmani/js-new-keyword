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