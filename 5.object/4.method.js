// A method is a function defined inside an object.

const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}:🍎`);
  },
};

apple.display();
