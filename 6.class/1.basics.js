// class & instance-level properties & methods
class Fruit {
  // Constructor: runs automatically when creating an object with the "new" keyword
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // Method definition: using an arrow function to create an instance method
  // (not using the traditional "function" keyword like this.display = function() {})
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

// "apple" is an instance (object) created from the Fruit class
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.display());
