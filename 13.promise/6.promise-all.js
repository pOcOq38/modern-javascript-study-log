function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍏");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("NO ORANGE"));
}

getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => {
        return [banana, apple];
      })
  )
  .then(console.log);

// Promise.all: runs multiple promises in parallel.
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

//Promise.race: returns the result of the fastest settled promise among the given promises.
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

// Promise.all with Error
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

// Promise.allSettled: returns the results with status info
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settled", fruits))
  .catch(console.log);
