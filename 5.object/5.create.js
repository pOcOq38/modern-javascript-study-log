// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}:🍎`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}:🍊`);
//   },
// };

// apple.display();
// orange.display();

//Constructor Function: A function used to create and initialize objects of the same type.
// The first letter is capitalized
// Use the `new` keyword to create a new object
// Use `this` to define properties of the new object
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  this.display = () => {
    //this.display = function(){}
    console.log(`${this.name}:${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.display());
