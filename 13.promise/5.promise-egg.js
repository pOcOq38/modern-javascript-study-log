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
  .catch(() => {
    return "🐔";
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then(friedEgg)
  .then((friedEgg) => console.log(friedEgg));
