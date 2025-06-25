function MultiplesCount(arr) {
  const result = {};

  for (let i = 1; i <= 9; i++) {
    result[i] = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % i === 0) {
        result[i]++;
      }
    }
  }

  return result;
}

// Output
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = MultiplesCount(input);
console.log(output);
