const fs = require('fs');

fs.readFile('./30_readfile.js','utf8',(err,data)=> {
  if(err) throw err;
  console.log(data);
})

// 同步
const data = fs.readFileSync('./01_run.js','utf8');
console.log(data);