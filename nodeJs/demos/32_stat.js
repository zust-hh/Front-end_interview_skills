const fs = require('fs');

fs.stat('./32_stat.js',(err,stats) => {
  if (err) throw err;

  console.log(stats.isFile());
  console.log(stats.isDirectory());

  console.log(stats);
})