const lastIndexOf = function(array, value){
  if(array.length < 1){
    return -1;
  }
  else{
    let i = array.length-1;
    while(i >= 0){
      if(array[i] === value){
        return i;
      }
      i--;
    }
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);