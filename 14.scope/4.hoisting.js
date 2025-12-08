// Function hoisting allows a function to be called before its declaration.
// Function declarations can be invoked even before they are defined.
print();

function print() {
  console.log("hello");
}

// Variables and classes are only hoisted by declaration,
// but they are NOT initialized.
// Accessing them before initialization results in a compile/build-time error.
console.log(hi); // Error
let hi = "hi";
let func1 = function () {};

// Classes behave the same way.
// Accessing a class before its declaration causes the app to crash.
const cat = new Cat(); // App crashed
class Cat {}

let x = 1;
{
  console.log(x); //Cannot access 'x' before initialization
  let x = 2;
}
