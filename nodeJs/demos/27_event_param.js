const EventEmitter = require('events');

class CustomEvent extends EventEmitter { }

const ce = new CustomEvent();

ce.on('error', (err, time) => {
  console.log(err + time);
})

ce.emit('error', new Error('oops!'), Date.now());