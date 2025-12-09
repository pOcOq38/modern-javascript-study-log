//Static binding
function Cat(name) {
  this.name = name;
  // 2. Use an arrow function: arrow functions remember `this` from their lexical environment.
  // They refer to the closest `this` in the outer scope.

  this.printName = () => {
    console.log(`print cat name: ${this.name}`);
  };
  //1. Manually bind using function bind
  //The object and its functions get bound together at the moment the object is created.
  //this.printName = this.printName.bind(this);
}
