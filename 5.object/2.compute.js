const obj = {
  name: "Elly",
  age: 20,
};

// Access is determined statically at coding time
obj.name;
obj.age;

// Use bracket notation when you want to access properties dynamically
function getValue(obj, key) {
  return obj[key];
  // obj[key] returns the value of the property named 'key' in the object 'obj'
}

// This will print the value of the "name" property in the 'obj' object
console.log(getValue(obj, "name"));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, "job", "engineer");
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, "job");
console.log(obj);
