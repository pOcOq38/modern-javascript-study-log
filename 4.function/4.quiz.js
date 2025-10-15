const printAll = (a) => console.log(a);

const print2x = (a) => console.log(a*2);

function iterate(max, action){
    for(let i = 0; i < max; i++){
        action(i);
    }
}

iterate(5, printAll);
iterate(5, print2x);

iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num*2));

setTimeout(() =>{
    console.log('after 1sec.')
}, 1000);