//Symbol: Returns a new unique Symbol value.
const map = new Map();
// const key1 = "key";
// const key2 = "key";
const key1 = Symbol("key");
const key2 = Symbol("key");
map.set(key1, "Hello");
console.log(map.get(key2));
console.log(key1 === key2);

//Global Symbol Registry: ensures one unique key per name.
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2);

//returns the key name only for symbols from the Global Symbol Registry.
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1));

//Symbol creates unique symbols regardless of the string value,
//while Symbol.for returns the same symbol for a given string key.
const obj = { [k1]: "Hello", [Symbol("key")]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol("key")]);
