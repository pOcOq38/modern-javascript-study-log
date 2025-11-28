const fruits = ["🍌", "🥝", "🍇", "🫐"];
console.log(fruits[1]);

// Destructuring Assignment
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["apple", "🍎"];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: "Ellie", age: 20, job: "engineer" };
/* 
function display(person) {
    console.log("이름: ", person.name);
    console.log("나이:", person.age);
    console.log("직업: ", person.job);
  }
*/

function display({ name, age, job }) {
  console.log("name: ", name);
  console.log("age:", age);
  console.log("job: ", job);
}
display(ellie);

const { name, age, job: occupation /*change key*/, pet = "dog" } = ellie;
console.log("name: ", name);
console.log("age:", age);
console.log("job: ", occupation);
console.log("pet: ", pet);
