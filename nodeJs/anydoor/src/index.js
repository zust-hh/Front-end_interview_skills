const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
  .usage('anydoor [options]')
  .option('p', {
    alias: 'port',
    describe: '端口号',
    default: 3030
  })
  .option('h', {
    alias: 'hostname',
    describe: 'host',
    default: '127.0.0.1'
  })
  .version()
  .alias('v','version')
  .help()
  .argv;

  const server = new Server(argv);
  server.start();