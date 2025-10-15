//FUNCTION
function sum(num1 = 1, num2 = 1) {
    console.log('arguments : ', arguments);
    console.log('arguments[1] : ', arguments[1]);
    return num1 + num2;
}

const result = sum(1, 2);
console.log('result : ', result);


function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let lastName = 'Kim';
let firstName = 'Jenny';
console.log('fullName : ', fullName(firstName, lastName));


//MEMORY
const add = sum;   //holds the same memory address

console.log('sum : ', sum(1, 2)); //3
console.log('add : ', add(1, 2)); //3


//RETURN
function print(num2) {
    if(num2 < 0){
        return;
    }
    console.log('num2 : ', num2);
    return `return : ${num2}`;
}
console.log('print : ', print(2)); 

//PARAMETERS
//default parameters = undefined

function sum2(a, b, ...numbers) {
    console.log('rest parameters : ', numbers);
}
sum2(1,2,3,4,5,6);
