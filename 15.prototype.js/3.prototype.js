//const dog1 = {name: "mung", emoji: '🐶'};
//const dog2 = {name: "coco", emoji: '🐕'}

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // Instance-level function
  // Each created instance has its own copy of the function → wastes memory
  /*this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };*/
}
const dog1 = new Dog("mung", "🐶");
const dog2 = new Dog("coco", "🐕");
console.log(dog1, dog2);

// Prototype-level function
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

// Overriding
// If a function with the same name is redefined at the instance level,
// the function on the prototype level becomes hidden (it gets shadowed).
dog1.printName = function () {
  console.log("hi");
};
dog1.printName();

//static-level
Dog.hello = () => {
  console.log("hello");
};
Dog.hello();
Dog.MAX_AGE = 20;
