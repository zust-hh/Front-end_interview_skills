const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');

const tid = setInterval(()=> {
  const num = parseInt(Math.random()*10);
  console.log(num)
  if(num<7) {
    ws.write(num.toString()); //不可以写数字，只能字符串和buffer
  } else {
    clearInterval(tid);
    ws.end();
  }
},200);

ws.on('finish', ()=> {
  console.log('done');
})