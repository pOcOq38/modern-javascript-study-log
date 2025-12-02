const obj1 = { name: "Bobby", owner: "John" };
const obj2 = { name: "Suzy", owner: "Jane" };

function changeOwner(animal) {
  animal.owner = "Bob";
}

function makeNewOwner(animal) {
  animal.owner = "Andy";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);

console.log(obj1);
console.log(obj2);

//Check null or undefined
let item = { price: 1 };
const price = item && item.price;
console.log(price);

//Set default value
//use || when falsy value is expected
function print(message) {
  const text = message || "default message";
  console.log(text);
}
print();
print(undefined);
