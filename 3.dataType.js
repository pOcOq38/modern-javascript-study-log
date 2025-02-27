

//PRIMITIVE TYPE  ======================================

let integer = 123;
let negative = -123;
let double = 1.23;

let binary = 0b1111011;
let octal = 0o173;
let hex = 0x7b;

console.log(0/123);
console.log(123/0); // Infinity
console.log(123/-0); // -Infinity
console.log(123/'test'); // not a number

//String
let string = 'hello';
string = "'hello'";

string = 'hello \n Elle \t\t hehe\\';
console.log(string, '11');

//Template Leteral
let id = 'Elle';
let greetings = "'hello!, " + id + " 😛\Have a good day!'";
console.log(greetings);

greetings = `'Hello, ${id} 
Hope you have a nice day! 👐'`;
console.log(greetings);

//boolean
let t = true;
let f = false;

let isFree = true;
let isActivated = false;
let isEnrolled = true;


// !! <- transfer to boolean
//Falsy
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);

//Trusyy
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);

//null, undefined
let variable;
console.log(variable); //undefined

variable = null;
console.log(variable); //null

let activeitem; //Uncertain whether any active items are assigned
activeitem = null; //No active items present

console.log(typeof null); //object
console.log(typeof undefined); //undefined


//OBJECT  ======================================
// object {key : value} => value: primitive/object

let name = 'apple';
let color='red';
let display = '🍎';
let orangeName = 'orange';

let apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
};

console.log(apple);
console.log(apple.name);
console.log(apple.display);

