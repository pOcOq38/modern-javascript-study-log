//over numbers from 0 to 10 (inclusive) and logs their double
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (n) => n * 2);
for (const num of multiple) {
  console.log(num);
}

const single = makeIterable(0, 20, (n) => n);
for (const num of single) {
  console.log(num);
}
