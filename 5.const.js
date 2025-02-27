//let allows reassignement
//const not allows reassignment

// |       | Reassignable | Mutable |
// | let   |     Yes      |   Yes   |
// | const |     NO       |   Yes   |

let a = 1;
a = 2;

const text = 'hello';
// text = 'hi';   <- error!

const MAX_FRUITS = 5;  // Allocate const variable with UPPER_SNAKE_CASE

const APPLE =  {     
    name: 'apple',
    color: 'red',
    display: '🍎',
}; 
//APPLE holds the memory address -> cannot reassign the address
// but the value inside the address can be changed. 
APPLE.name = 'orange'  
console.log(APPLE); //orange
