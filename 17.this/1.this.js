// this in global context
// - browser: Window
// - node: module

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
//globalThis.setTimeout();
//setTimeout();
console.clear();

// this in function: global this
// use strict: undefined
function fun() {
  console.log(this);
}
fun();

//this in constructor function or class
function Cat(name) {
  this.name = name;
  this.printname = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat("MEOW");
cat.printname();
