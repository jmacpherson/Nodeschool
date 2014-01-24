var http = require("http");
var dataCollect = [];
var urls = [];
var finished = 0;

for (var i = 0; i < 3; i++){
  urls[i] = process.argv[i + 2];
  dataCollect[i] = [];
  httpGet(i);
}

function printData(){
  for (var i = 0; i < 3; i++){
    console.log(dataCollect[i]);
  }
}g

function httpGet(index){
  http.get(urls[index], function(res){
    res.setEncoding("utf8");
    res.on("data", function(data){
      dataCollect[index].push(data);
    });
    res.on("end", function(){
      dataCollect[index] = dataCollect[index].join("");
      finished++;
      if (finished == 3){
        printData();
      }
    });
  }).on("error", function(e){
    console.log("Got " + e);
  });
}