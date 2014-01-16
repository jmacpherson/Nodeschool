var sum = 0;
process.argv.forEach(function(val, index, array){
  if (!(isNaN(Number(val)))){
    sum += Number(val);
  }
});
console.log(sum);