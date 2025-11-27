const array = ["🍌", "🍓", "🍇", "🍓"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach(function (value, index, array) {
  console.log("---------------");
  console.log(value);
  console.log(index);
  console.log(array);
});

array.forEach((value) => {
  console.log(value);
});

//Returns the value of the first element in the array where predicate is true
const item1 = { name: "milk", price: 2 };
const item2 = { name: "cookie", price: 3 };
const item3 = { name: "onigiri", price: 1 };
const products = [item1, item2, item3, item2];
let found = products.find((value) => {
  return value.name === "cookie";
});
console.log(found);

//Returns the index of the first element in the array where predicate is true,
found = products.findIndex((value) => {
  return value.name === "cookie";
});
console.log(found);

//Determines whether the specified callback function returns true for any element of an array.
found = products.some((item) => {
  return item.name === "cookie";
});
console.log(found);

//Determines whether all the members of an array satisfy the specified test
found = products.every((item) => {
  return item.name === "cookie";
});
console.log(found);

//Returns the elements of an array that meet the condition specified in a callback function.
found = products.filter((item) => {
  return item.name === "cookie";
});
console.log(found);

console.clear();

//Map: Calls a defined callback function on each element of an array,
// and returns an array that contains the results.
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
  return item * 2;
});
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//Flatmap: Calls a defined callback function on each element of an array.
// Then, flattens the result into a new array.
result = nums.map((item) => {
  return [1, 2];
});
console.log(result);

result = nums.flatMap((item) => {
  return [1, 2];
});
console.log(result);

result = ["Hello", "world"].map((text) => {
  return text.split("");
});
console.log("map: ", result);

result = ["Hello", "world"].flatMap((text) => {
  return text.split("");
});
console.log("flatMap: ", result);

//sort
const texts = ["hi", "abc"];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

//reduce: The accumulated result
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0 /*default of sum*/);
console.log(result);
