"use strict";
//strict mode
var x = 1;
//delete x;

function add(x) {
  var a = 2;
  b = a + x;
  console.log(this);
}
add(1);

const array = [1, 2, 3];
for (num of array) {
  console.log(num); //num is not defined
}
