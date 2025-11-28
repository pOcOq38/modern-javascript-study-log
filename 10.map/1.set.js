const set = new Set([1, 2, 3]);
console.log(set);
console.log(set.size);
console.log(set.has(2));

set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//Set stores unique values.
set.add(6);
console.log(set);
set.add(6);
console.log(set);

set.delete(2);
console.log(set);

set.clear();
console.log(set);

//Object set
const obj1 = { name: "🍎", price: 8 };
const obj2 = { name: "🍌", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

obj1.price = 10; //shallow copy
objs.add(obj1);
console.log(objs);

const obj3 = { name: "🍌", price: 5 };
objs.add(obj3); //stored at a new memory location in the heap.
console.log(objs);
