// 함수: 클래스 대체 사용 가능 but 불필요한 prototype객체가 생성됨
const dog = {
  name: "dog",
  //walk: function () {
  walk: () => {
    console.log("walk!");
  },
};
const obj = new dog.walk(); //❌

//ES6
const cat = {
  name: "Cat",
  eat() {
    // object method
    console.log("meow");
  },
};

// const onj1 = new cat.eat(); //error

// Arrow function
// 1. Cleaner syntax
// 2. Cannot be used as a constructor (doesn't create a heavy prototype object)
// 3. Does not have its own `arguments`
// 4. `this` binding is determined statically
//    - It is bound to the closest parent scope's `this`
