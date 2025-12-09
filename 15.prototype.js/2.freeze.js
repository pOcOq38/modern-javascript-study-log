//Object.freeze ❌ add, delete, write, redefine
const ellie = { name: "ellie" };
const dog = { name: "wow", emoji: "🐶", owner: ellie };
Object.freeze(dog);
dog.name = "bowwow";
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;

//Object.seal ✅revise value ❌ delete, write, redefines property
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = "meow";
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

//preventExtensions ❌ add
const p1 = { name: "Ray" };
Object.preventExtensions(p1);
console.log(Object.isExtensible(p1));
p1.name = "Kelly";
console.log(p1);
delete p1.name;
console.log(p1);
