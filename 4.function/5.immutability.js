//Modifying the value of an argument inside a function is not recommended.
//If a state change is necessary, a new state (object or value) should be created and returned.


//❌
function displayObj(obj){
    obj.name = 'Bob';
    console.log(obj);
}
const ellie = { name: 'Ellie'};
displayObj(ellie);
console.log(ellie);

//⭕️
function changeName(obj) {
    return {...obj, name: 'Bob'};  //assign new obj 
}
