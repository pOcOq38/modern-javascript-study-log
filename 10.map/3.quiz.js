// Remove duplicates from the given array.
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']

const set = new Set(fruits);
console.log(set);

// Create a set containing only the common items from the two given sets.
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));
