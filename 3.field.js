// Access modifier - Encapsulation
// private(#), public(default)
class Fruit {
  name; //optional, when defined in the constructor
  #emoji;
  #type = "fruit"; //default
  constructor(name, emoji) {
    this.name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
//console.log(apple.#emoji); -> error
console.log(apple);
