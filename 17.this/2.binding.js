// this binding
// In many languages, `this` always refers to the instance itself.
// It is statically determined at the moment the instance is created.
// However, in JavaScript, `this` is determined by *who calls the function*.
// In other words, `this` is dynamically bound based on the caller.

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`print cat name: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`print dog name: ${this.name}`);
  };
}
const cat = new Cat("MEOW");
const dog = new Dog("BOW-WOW");

cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log("execute callback");
  printName();
}

printOnMonitor(cat.printName); //undefined
