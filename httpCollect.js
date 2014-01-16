var http = require('http');
var url = process.argv[2];
var dataCollect = [];

http.get(url, function(response){
  response.setEncoding("utf8");
  response.on("data", function(data){
    dataCollect.push(data);
  });
  response.on("end", function(){
    data = dataCollect.join("");
    console.log(data.length);
    console.log(data);
  });
}).on("error", function(e){
  console.log("Got " + e);
});