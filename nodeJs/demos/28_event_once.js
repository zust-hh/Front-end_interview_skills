const EventEmitter = require('events');

class CustomEvent extends EventEmitter { }

const ce = new CustomEvent();

ce.once('test', ()=>{
  console.log('test event once');
});

setInterval(()=>{
  ce.emit('test');
},500)