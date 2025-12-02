function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function friedEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error("🐥"));
  return Promise.resolve(`🐣 => 🐓`);
}

getChicken()
  .catch(() => "🐔")
  .then(fetchEgg)
  .then(friedEgg)
  .then(console.log);

async function makeFriedEgg() {
  let chicken;
  try {
    const chicken = await getChicken();
  } catch {
    chicken = "🐔";
  }
  const egg = await fetchEgg(chicken);
  return friedEgg(egg);
}

makeFriedEgg().then(console.log);
