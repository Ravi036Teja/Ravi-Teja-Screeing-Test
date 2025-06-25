function generateOddSeries(a) {
  let count = (a % 2 === 0) ? a - 1 : a;
  let result = [];

  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  return result.join(', ');
}

//Output
console.log(generateOddSeries(1)); // 1
console.log(generateOddSeries(2)); // 1
console.log(generateOddSeries(3)); // 1, 3, 5
console.log(generateOddSeries(4)); // 1, 3, 5
console.log(generateOddSeries(5)); // 1, 3, 5, 7, 9
console.log(generateOddSeries(6)); // 1, 3, 5, 7, 9
