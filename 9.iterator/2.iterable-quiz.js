//over numbers from 0 to 10 (inclusive) and logs their double
const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
