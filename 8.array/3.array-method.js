const fruits = ["🍌", "🍎", "🍇", "🍑"];

console.log(Array.isArray(fruits));
console.log(fruits.indexOf("🍎"));
console.log(fruits.includes("🍇"));

//Appends new element to the end of an array
fruits.push("🍑");

//Appends new element at the start of an array
fruits.unshift("🥭");

//Removes the last element from an array and returns it
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

//Removes the first element from an array and returns it.
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

//Appends, removes in the middle
const deleted = fruits.splice(1, 1);
console.log(deleted);
fruits.splice(1, 0, "🍉", "🍐");

//Returns a copy of a section of an array.
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
fruits.slice(-1);

//Combines two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//Reverses the elements in an array in place.
const arr4 = arr3.reverse();

//Returns a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.clear();
console.log(arr);
console.log(arr.flat(2));

//Changes all array elements from start to end index
// to a static value and returns the modified array
arr = arr.flat(3);
arr.fill(0);
console.log(arr);

arr.fill("s", 1, 3);
console.log(arr);

let text = arr.join();
text = arr.join(", ");
console.log(text);
