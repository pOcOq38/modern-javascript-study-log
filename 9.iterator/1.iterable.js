// Iterable
// [Symbol.iterator](): Iterator;
// for..of, spread

const array = [1, 2, 3];

for (const item of array.keys()) {
  console.log(`keys: ${item}`);
}

for (const item of array.values()) {
  console.log(`values: ${item}`);
}

for (const item of array.entries()) {
  console.log(`entries: ${item}`);
}

//obj is not iterable
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item); //print keys
}

// An iterator has a `next` method.
// The `next` method returns an object with two properties:
// `value`: the current item
// `done`: a boolean indicating whether the iteration is finished (true if done).

const iterator = array.values();
for (const item of iterator) {
  console.log(`next: ${JSON.stringify(iterator.next())}`);
  console.log(iterator.next().value);
  console.log(iterator.next().done);
}

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
