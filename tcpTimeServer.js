var net = require('net');
var server = net.createServer(function(socket){
  var date = new Date();
  var datef = date.toISOString().substring(0,10) + " " + date.getHours() + ":" + date.getMinutes() + "\n";
  socket.write(datef);
  socket.end();
});

server.listen(process.argv[2]);