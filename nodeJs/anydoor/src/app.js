const http = require('http');
const conf = require('./config/defaultConf');
const chalk = require('chalk');
const path = require('path');
const route = require('./helper/route');
const openUrl = require('./helper/openUrl');

class Server {
  constructor(config) {
    this.conf = Object.assign({}, conf, config);
  }

  start() {
    const server = http.createServer((req, res) => {
      const url = req.url;
      const filePath = path.join(this.conf.root, url);
      route(req, res, filePath, this.conf);
    });

    server.listen(this.conf.port, this.conf.hostname, () => {
      const addr = `http://${this.conf.hostname}:${this.conf.port}`
      console.info(`Server started at ${chalk.green(addr)}`)
      openUrl(addr);
    })
  }
}

module.exports = Server;


