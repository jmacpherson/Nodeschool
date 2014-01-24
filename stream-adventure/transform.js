var through = require('through');
var tr = through(write,end);

process.stdin.pipe(tr).pipe(process.stdout);

function write(buf){
  var transform = buf.toString().toUpperCase();
  this.queue(transform);
}

function end(){
  this.queue(null);
}