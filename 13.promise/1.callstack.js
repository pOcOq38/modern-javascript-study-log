/*
1. JavaScript is single-threaded, 
    processes functions one by one on the Call Stack.

2. In browsers or Node.js, many asynchronous tasks like network requests, timers, and file I/O exist.
   These async tasks are handled 'outside the JS engine' (by browser or Node APIs).

3. JavaScript needs to know when async tasks complete and manage multiple completions.

4. The Event Loop continuously checks if the Call Stack is empty.
   When empty, it moves async callbacks from the Task Queue to the Call Stack to execute them.
 */

function a() {
  for (let i = 0; i < 1000000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result);
