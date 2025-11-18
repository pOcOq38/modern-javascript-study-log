console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.log(this);
eval("const num = 2; console.log(num)");
console.log(isFinite(Infinity));
console.log(parseFloat("12.43"));
console.log(parseInt("11"));

const URL = "https://한글.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

const part = "한글.com";
encodeURIComponent(part);
