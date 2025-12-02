//try catch finally
function readFile(path) {
  throw new Error("file not found");
  return "contents of the file";
}

function processFile(path) {
  let contents;
  try {
    contents = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    contents = "default";
  } finally {
    console.log(
      "finally block will be executed regardless of the success or failure"
    );
  }
  return "hi " + contents; //return contents;
}

const result = processFile("file.txt");
console.log(result);
