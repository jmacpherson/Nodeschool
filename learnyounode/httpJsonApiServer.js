var http = require('http');
var server = http.createServer(function(req,res){
  var date = new Date(req.url.split("=")[1]);
  if (req.method === 'GET' && req.url.split("?")[0] === "/api/parsetime"){
    var response = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
    res.end(JSON.stringify(response));
  } else if (req.method === 'GET' && req.url.split("?")[0] === "/api/unixtime"){
    var response = {
      "unixtime": date.valueOf()
    };
    res.end(JSON.stringify(response));
  }
});

server.listen(process.argv[2]);