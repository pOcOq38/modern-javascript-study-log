const dog = { name: "poppy", age: 10 };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log("name" in dog);
console.log(dog.hasOwnProperty("name"));

//Each property of the object is stored as property descriptor.
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const descriptor = Object.getOwnPropertyDescriptor(dog, "name");
console.log(descriptor);

Object.defineProperty(dog, "name", {
  value: "bow-wow",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;

const student = {};
Object.defineProperties(student, {
  firtname: {
    value: "Stephanie",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Kim",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${firtname} ${lastName}`;
    },
    set(name) {
      [this.lastName, this.firtname] = name.split("");
    },
    configurable: true,
  },
});
console.log(student);
