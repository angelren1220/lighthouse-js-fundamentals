const merge = function(array1, array2){
  let array = [];
  for(let i = 0; i < array1.length; i++){
    array.push(array1[i]);
  }
  for(let i = 0; i < array2.length; i++){
    array.push(array2[i]);
  } 
  return array.sort(); 
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);