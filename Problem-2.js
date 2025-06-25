function generateOddSeries(a) {
  let result = [];
  
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1); 
  }

  return result.join(', ');
}

// Outputs
console.log(generateOddSeries(1)); // 1
console.log(generateOddSeries(2)); // 1, 3
console.log(generateOddSeries(3)); // 1, 3, 5
console.log(generateOddSeries(4)); // 1, 3, 5, 7
console.log(generateOddSeries(5)); // 1, 3, 5, 7, 9

