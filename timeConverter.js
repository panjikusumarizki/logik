let a = '2025-05-04T07:00:00.000Z';
// let a = 1729789199999;
const b = new Date(a).toLocaleDateString();
const c = Date.now()
const d = new Date(c);
console.log(b);
console.log(c);
console.log(d);

console.log(typeof d);

let e = new Date('2025-05-04T20:00:00.000Z').toString();
console.log(e);