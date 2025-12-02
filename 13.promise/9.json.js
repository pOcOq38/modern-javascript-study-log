//JSON: JavaScript Object Notation
//stringify(objext): JSON
//parse(JSON): object

const ellie = {
  name: "Ellie",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

//Serializing
const json = JSON.stringify(ellie);
console.log(ellie);
console.log(json);

//Deserializing
const obj = JSON.parse(json);
console.log(obj);
