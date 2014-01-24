var concat = require('concat-stream');

process.stdin.pipe(concat(function(buf){
  var reversed = buf.toString().split("").reverse().join("");
  console.log(reversed);
}));