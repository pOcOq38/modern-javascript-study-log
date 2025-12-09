//프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emogi = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  Animal.call(this, name, emoji); //The same as super
  this.owner = owner;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log("bowwowbowwow");
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("🐰🐇");
};

const dog1 = new Dog("Coco", "🐶", "Ellie");
dog1.play();
dog1.printName();

const tiger1 = new Tiger("Kitty", "🐯");
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
