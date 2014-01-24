var through = require('through');
var split = require('split');
var tr = through(write, end);
var lineCount = 0;

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

function write(buf){
  lineCount++;
  var line = buf.toString();
  if(lineCount % 2 != 0){
    var output = line.toLowerCase();
    this.queue(output + "\n");
  } else {
    var output = line.toUpperCase();
    this.queue(output + "\n");
  }
}

function end(){
  this.queue(null);
}