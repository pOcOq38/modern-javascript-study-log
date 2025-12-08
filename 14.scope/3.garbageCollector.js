// Global variables remain in memory until the app terminates.
const global = 1;

{
  // Exists only inside this block and is automatically discarded (GC) once the block ends.
  const local = 1;
}

function print() {
  // Even inside functions, variables should be declared inside
  // the smallest block where they are needed.
  if (true) {
    let temp = 0;
  }
}
