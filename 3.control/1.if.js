//Conditional Statment

let fruit = 'orange';
if(fruit == 'apple'){
    console.log('🍎');
}else if(fruit == 'orange'){
    console.log('🍊');
}else{
    console.log('!!');s
}

if(false){
    console.log('false');
}

if(0){
    console.log('false');
}

//Ternary Operator
fruit === 'apple' ? console.log('🍎') :  console.log('🍊');

let emoji = fruit === 'apple' ? '🍎' :  '😂';
console.log(emoji);

//QUIZ
let num = 2;
//if num is even number 👍, odd number 👎
emoji = num % 2 === 0 ? '👍' : '👎'
console.log(emoji);


