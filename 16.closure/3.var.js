function loop() {
  //scope1
  const array = [];
  //difference b/w var(scope1) and let(scope1, 2, 3)
  for (let i = 0; i < 5; i++) {
    //scope2
    array.push(function () {
      //scope3
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
