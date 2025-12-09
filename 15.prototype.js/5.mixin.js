//Object has only one parent
//When multiple function implementations need to be inherited
//Mixin

const walk = {
  walk: function () {
    console.log(`${this.name} walk!`);
  },
};

const sleep = {
  walk: function () {
    console.log(`${this.name} sleep!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, walk, sleep);

const dog = new Dog("bowwow");
console.log(dog);
dog.walk();
dog.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
Object.assign(Tiger.prototype, walk, sleep);
const tiger = new Tiger("grawl");
console.log(tiger);
tiger.walk();
tiger.sleep();
