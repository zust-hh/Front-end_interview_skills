console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1,2,3])));

const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is');
const buf = console.log(Buffer.concat([buf1,buf2]));
console.log(buf.toString());