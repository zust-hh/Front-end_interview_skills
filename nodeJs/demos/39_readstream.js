const fs = require('fs');

const rs = fs.createReadStream('./39_readstream.js');

rs.pipe(process.stdout);