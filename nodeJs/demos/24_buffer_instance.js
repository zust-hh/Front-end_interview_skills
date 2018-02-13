const buf = Buffer.from('This is a test!');

console.log(buf.length);

console.log(buf.toString());

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
console.log(buf3.fill(1));

const buf4 = Buffer.from([1,2,3]);
const buf5 = Buffer.from([2,3,4]);
console.log(buf4.equals(buf5));

console.log(buf4.indexOf(2));
console.log(buf4.indexOf(4));
