//Standart: UTC
console.log(new Date());
console.log(new Date("Jun 5, 2025"));
console.log(new Date("2025-11-17T03:24:00"));

console.log(Date.now());
console.log(Date.parse("2025-11-17T03:24:00"));

const now = new Date();
now.setFullYear(2025);
now.setMonth(10);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); //0: Sunday
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toTimeString());
console.log(now.toLocaleString("en-US"));
