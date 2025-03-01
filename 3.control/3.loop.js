//Loop Statement
//for

for(let i = 0; i <= 5; i++){
    console.log(i);
}

for(let i = 0; i< 20; i++){
    if(i == 10){
        continue;
        console.log(' i == 10 !!');
        break;
    }
    console.log(i);
}

//while
let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}

let a = 5;
do{
 console.log('is active');
 console.log('a : ', a);
    a--;
}while(a >= 0);

