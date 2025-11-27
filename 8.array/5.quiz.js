// Quiz 1: Create a function that replaces all strawberry items with kiwi in a given array.
// Make sure NOT to modify the original array!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ["🍌", "🍓", "🍇", "🍓"];
const result = replace(array, "🍓", "🥝");
console.log(result);

// Quiz 2:
// Create a function that receives an array and a specific element,
// and returns how many times that element appears in the array.
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2

function countKiwi(array, item) {
  let cnt = 0;
  for (let i = 0; i < array3.length; i++) {
    if (array3[i] == item) {
      cnt++;
    }
  }
  return cnt;
}
const array3 = ["🍌", "🥝", "🍇", "🥝"];
const result2 = countKiwi(array3, "🥝");
console.log(result2);

// Quiz 3: Create a function that takes two arrays,
// and returns a new array containing only the items from the first array
// that also exist in the second array.
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

function match(input, match) {
  const res = [];
  for (let i = 0; i < input.length; i++) {
    if (input.includes(match[i])) {
      res.push(match[i]);
    }
  }
  return res;
}

console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));
