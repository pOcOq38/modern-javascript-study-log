// Quiz 1: Create a function that replaces all strawberry items with kiwi in a given array.
// Make sure NOT to modify the original array!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

function replace(array, from, to) {
  return array.map((item) => (item == from ? to : from));
}
const array = ["🍌", "🍓", "🍇", "🍓"];
console.log(replace(["🍌", "🍓", "🍇", "🍓"], "🍓", "🥝"));

// Quiz 2:
// Create a function that receives an array and a specific element,
// and returns how many times that element appears in the array.
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2

function countKiwi(array, kiwi) {
  /*  let cnt = 0;
   array.map((item) => (item == kiwi ? cnt++ : cnt));
   return cnt;*/

  /* return array.reduce((count, value) => {
    if (value === kiwi) {
      count++;
    }
    return count;
  }, 0); */

  return array.filter((value) => value === kiwi).length;
}

console.log(countKiwi(["🍌", "🥝", "🍇", "🥝"], "🥝"));

// Quiz 3: Create a function that takes two arrays,
// and returns a new array containing only the items from the first array
// that also exist in the second array.
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

function match(input, search) {
  return input.filter((item) => search.includes(item));
}

console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));

// Quiz 4: Average of numbers over 5

const nums = [3, 16, 5, 25, 4, 34, 21];

// Higher-order functions can take index and the entire array as arguments.
// Unused parameters can be named with an underscore (_) to avoid graying out in some editors.
// avg calculation method 1: sum(numbers) / length
// avg calculation method 2: sum(each number divided by length)
const result2 = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(result2);
