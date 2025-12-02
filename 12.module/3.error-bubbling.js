// Bubbling up, Propagation
function a() {
  throw new Error("error in a");
}

function b() {
  try {
    a();
  } catch (error) {
    console.log(
      "If b can't handle the error, throw it to the next catch block"
    );
    throw new Error("error in b");
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log(error.message);
}
console.log("end of the program");
