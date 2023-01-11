const range = function(start, end, step){
  var numArray = [];
  if(start < end && step > 0){
    for(let i = start; i <= end; i += step){
      numArray.push(i);
    }
  }
  return numArray;

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(3,1,0));