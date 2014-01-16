var ls = require("./ls");

ls(process.argv[2], process.argv[3], function(err, files){
  if (err){
    return err;
  } else {
    files.forEach(function(data){
      console.log(data);
    });
  }
});