const howManyHundreds = function(num){
  if(num === 0){
    return 0;
  }
  else{
    while(num !== 0){
      if(num % 100 < 100){
        return (num - num % 100) / 100;
      }
      num /= 100;
    }
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);