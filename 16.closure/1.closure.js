const text = "hello";
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    // The inner lexical environment references the outer lexical environment,
    // so calling x is possible.

    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();
