var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.createStream('.loud');
stream.pipe(through(write, end)).pipe(stream);

function write(buf){
  this.queue(buf.toString().toUpperCase());
}
function end(){
  this.queue(null);
}