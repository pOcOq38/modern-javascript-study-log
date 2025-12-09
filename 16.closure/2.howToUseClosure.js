// To hide internal data and manipulate it only through public functions.
// Encapsulation and information hiding.
// Provides the same effect as using private fields or methods in a class.

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count++);
  }
}
const counter = new Counter();
counter.increase();
