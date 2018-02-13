const fs = require('fs');

const buf = Buffer.from('this is buffer');

fs.writeFile('./text','this is test',{
  encoding: 'utf8'
}, err => {
  if(err) throw err
  console.log('ok');
})