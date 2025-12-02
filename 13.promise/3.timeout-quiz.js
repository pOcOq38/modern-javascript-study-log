function runInDelay(callback, seconds) {
  if (!seconds || seconds < 0) {
    throw new Error("seconds < 0");
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("DONE!");
  }, 1);
} catch (error) {}
