// Shallow copy: creates a new outer object,
// but shares references of inner objects

const pizza = { name: "pizza", price: 2 };
const ramen = { name: "ramen", price: 3 };
const sushi = { name: "sushi", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log("store1", store1);
console.log("store2", store2);

store2.push(sushi);
console.log("store1", store1);
console.log("store2", store2);

pizza.price = 4;
console.log("store1", store1);
console.log("store2", store2);
