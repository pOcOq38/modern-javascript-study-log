//Map: key(unique) - value
const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍌"],
]);
console.log(map.size);
console.log(map.has("key1"));
console.log(map.has("key6"));

console.log(map.forEach((value, key) => console.log(key, value)));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

//finds
console.log(map.get("key1"));

//adds
map.set("key3", "🍐");
console.log(map);

//delete
map.delete("key3");
console.log(map);

map.clear();
console.log(map);

// difference between map and object
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "fresh" };
const map2 = new Map([[key, milk]]);
console.log("===MAP===: ", map2);

const obj = {
  [key]: milk,
};
console.log("===OBJECT===: ", obj);

console.log(obj[key]);
console.log(map2[key]); //undefined
console.log(map2.get(key));
