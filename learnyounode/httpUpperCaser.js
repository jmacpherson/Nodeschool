var http = require('http');
var server = http.createServer(function(req, res){
  if (req.method === 'POST') {
    var body = '';
    req.on("data", function(data){
      body += data;
    });
    req.on("end", function(){
      res.write(body.toUpperCase());
      res.end();
    });
  } else {
    res.end();
  }
});

server.listen(process.argv[2]);