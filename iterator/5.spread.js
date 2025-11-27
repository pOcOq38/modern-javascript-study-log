// func(...iterable)
// [...iterable]
// {...obj}

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 2, 5, 3, 2, 5);

// Array Concat
const frt1 = ["🍌", "🥝", "🍇", "🥝"];
const frt2 = ["🍌", "🥝", "🍇"];
let arr = frt1.concat(frt2);
console.log(arr);

arr = [...frt1, "🫐", ...frt2];
console.log(arr);

// Object
const ellie = { name: "Ellie", age: 20 };
const update = {
  ...ellie,
  job: "engineer",
};
console.log(`ellie: ${JSON.stringify(ellie)}`);
console.log(`update: ${JSON.stringify(update)}`);
