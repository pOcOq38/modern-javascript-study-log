const fruits = ["🍌", "🍎", "🍇", "🍑"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Add, Delete - not recommended
fruits[3] = "🍓";
console.log(fruits);

delete fruits[1];
console.log(fruits);

//
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
