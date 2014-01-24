var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function(err, files){
  for (var i = 0; i < files.length; i++){
    var end = files[i].length - 1;
    if (path.extname(files[i]).indexOf(extension) != -1){
      console.log(files[i]);
    }
  }
});