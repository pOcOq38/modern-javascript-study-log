// Assign a value to a memory cell  
// Primitive: The value itself is stored in a memory cell. A variable holds the address of that memory cell.  
//            copy by value  
// Object: A dynamically sized entity, consisting of key-value pairs, is allocated in heap memory.  
//         A variable holds the address of a memory cell that stores references to other memory locations containing the object's keys and values.  
//         copy by reference

//PRIMITIVE TYPE
//copy by value
let a = 1; 
let b = a; //1
b = 2;
console.log(a); //1
console.log(b); //2

//OBJECT
// Copy by reference
let app = {  // address: 0x1234   
    name: 'apple',     
}; 
// The variable app holds the address (0x1234) of the memory cell that stores the object {key(name): value(apple)}.
// app = 0x1234 -> The value stored in memory cell 0x1234 is 0x5678 -> The object is stored in 0x5678.

let org = app; // The variable org (0x8765) now holds the address (0x5678) stored in app (0x1234).
org.name = 'orange'; // Changes the name stored in 0x5678 to 'orange'.
console.log(app);  // 'orange'
console.log(org);  // 'orange'


