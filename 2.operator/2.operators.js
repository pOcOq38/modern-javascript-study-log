// arithmetic operators
// + - * / % **

console.log(5+2);
console.log(5 ** 2); 

let text = 'a' + 'b';

text = '1' + 1; //string

//unary operators
// + - !

let a = 5;
a = -a; //-1 * 5
console.log(-a); // 5

let boolean = true;
console.log(!boolean); //false

console.log(+false);  //0
console.log(+null);  //0
console.log(+'');  //0
console.log(+true);  //1
console.log(+undefined);  //NaN

//assignment operators
let a1 = 1;
a1 = a1 + 2;

a1 += 2; // 5
a1 -= 2;
a1 *= 2;

//Increment & Decrement operators
let a2 = 0;
a2++; //1
a2--; //0

a2 = 0;
let b = a2++;
console.log(b); //0 
console.log(a2); //1

//Relational operators
// > < >= <=

console.log(2 > 3); //false
console.log(3 <= 3); //true

//priority
let a3 = 2;
let b2 = 3;
let res = a3 + b2 * 4;
res = a3++ + b2 * 4; 

//Equality operators
//== !=  value only
//=== !== value & type
console.log(2 == 2); //true
console.log(2 == '2'); //true
console.log(2 === '2'); //false
console.log(false == 0); //true

const obj1 = {     //memory address: 0x111
    name: 'js',
};

const obj2 = {     //memory address: 0x112
    name: 'js',
};

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
console.log(obj1.name == obj2.name); //true
console.log(obj1.name === obj2.name); //true

let obj3 = obj2;
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true

//Logical operator
//&&: and ||: or !: not !!: boolean
let num = 21;
 if(num>= 0 && num < 9 ){
    console.log('A');
 }
 if(num>= 0 || num > 9 ){
    console.log('A');
 }








