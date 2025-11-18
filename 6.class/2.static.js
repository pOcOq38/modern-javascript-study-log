// Class-level properties & methods
// Use class-level properties and methods when every object refers to the same attribute or action
class Fruit {
  // Constructor: runs automatically when creating an object with the "new" keyword
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // Class-level method
  static makeRandonFruit() {
    // Class-level methods CANNOT refer to "this".
    return new Fruit("banana", "🍌");
  }

  // Class-level property
  static MAX_FRUITS = 4;

  // Instance-level method
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

//Accessible only through the class name
const banana = Fruit.makeRandonFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
