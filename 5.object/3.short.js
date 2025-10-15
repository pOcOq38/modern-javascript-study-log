//property shorthand
//same key and variable name allows omitting the value
const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name, // name: name,
    age, // age: age,
  };
}
