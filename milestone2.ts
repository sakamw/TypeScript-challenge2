// Sum of Positives
const sumOfPositives = (numbers: number[]): number => {
  let sum = 0;
  for (const num of numbers) {
    if (num > 0) sum += num;
  }
  return sum;
};
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
