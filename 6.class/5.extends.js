class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("yellow");
console.log(tiger);

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //from parents class(Animal)
    this.ownerName = ownerName;
  }
  play() {
    console.log("play");
  }
  //overriding
  eat() {
    super.eat();
    console.log("snack");
  }
}

const dog = new Dog("brown", "Elle");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
