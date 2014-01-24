var fs = require('fs');
var path = require('path');

module.exports = function filter(dir, ext, callback){
  fs.readdir(dir, function(err, files){
    if (err){
      callback(err)
    } else {
      var fileList = [];
      files.forEach(function(file){
        if (path.extname(file).indexOf(ext) != -1){
          fileList.push(file);
        }
      });
      return callback(null, fileList);
    }
  });
}