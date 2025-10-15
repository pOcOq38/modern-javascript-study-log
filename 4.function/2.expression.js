let add = function (a, b) {
    return a + b;
};

console.log(add(1,2));

//const name = () => {}
add = (a, b) => {
    return a + b; 
};

add = (a,b) => a+b;

//IIFE(Immediately-Invoked Funtion Expressions)
(function run(){
    console.log('🏃');
})();