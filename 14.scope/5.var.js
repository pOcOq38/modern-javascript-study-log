// var: Goes against typical coding practices.
// It hurts readability and maintainability.

// 1. Variables can be declared and assigned without a keyword.
// It's hard to distinguish whether it's a declaration or a reassignment.
something = "sth";
console.log(something);

// 2. Duplicate declarations are allowed.
var a = "a";
var a = "a";
console.log(a);

// 3. Block-level scope is ignored.
var apple = "apple1";
{
  var apple = "apple2";
  {
    var apple = "apple3";
  }
}
console.log(apple);

// 4. Only function-level scope is supported.
function exm() {
  var dog = "husky";
}
console.log(dog); // app crashed
