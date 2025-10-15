//Object literal {key: value}
//new Object()
//Object.create();
// key - string, number, symbol
// value - primitive value, object (including functions)

let apple = {
  name: "apple",
  "hello-bye": "👋",
  0: 1,
  ["hello-bye1"]: "✋",
};

// to access properties and data
apple.name; // dot notation
console.log(apple["hello-bye1"]); //bracket notation
apple["name"];

//add properties
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

//delete properties
delete apple.emoji;
console.log(apple);
