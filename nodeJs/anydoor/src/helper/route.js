const promisify = require('util').promisify;
const fs = require('fs');
const Handlebars = require('handlebars');
const path = require('path');
const mime = require('./mime');
const compress = require('./compress');
const range = require('./range');
const isFresh = require('./cache');

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const tplPath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

module.exports = async function (req, res, filePath,config) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      const contentType = mime(filePath);
      res.setHeader('Content-Type', contentType);
      // fs.readFile(filePath,(err,data)=> {
      //   res.end(data);
      // });
      if(isFresh(stats,req,res)) {
        res.statusCode = 304;
        res.end();
        return;
      }
      let rs;
      const { code, start, end } = range(stats.size, req, res);
      if (code == 200) {
        res.statusCode = 200;
        rs = fs.createReadStream(filePath);
      } else if (code == 206) {
        res.statusCode = 206;
        rs = fs.createReadStream(filePath, { start, end })
      }
      if (filePath.match(config.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
    } else if (stats.isDirectory()) {
      try {
        const files = await readdir(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const dir = path.relative(config.root.toString(), filePath);
        const data = {
          files: files.map(file => {
            return {
              file,
              icon: mime(file)
            }
          }),
          title: path.basename(filePath),
          dir: dir ? `/${dir}` : '',
        }
        res.end(template(data));
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.error(err);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a directory or file`);
  }
}