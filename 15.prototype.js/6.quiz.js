class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  walk() {
    console.log(`walk!`);
  }
}

class Tiger extends Animal {
  hunt() {
    console.log(`hunt!`);
  }
}

const dog1 = new Dog("Coco", "🐶");
const tiger1 = new Tiger("Kitty", "🐯");
dog1.printName();
tiger1.printName();

console.log(dog1 instanceof Animal);
