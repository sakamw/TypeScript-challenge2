// Challenge 1: Sum of Positives
const sumOfPositives = (numbers: number[]): number => {
  let sum = 0;
  for (const num of numbers) {
    if (num > 0) sum += num;
  }
  return sum;
};
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

// Challenge 2: Find Maximum Value
const findMax = (numbers: number[]): number => {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) max = num;
  }
  return max;
};
console.log(findMax([3, 7, 2, 9, 5]));

// Challenge 3: Election Winner
interface candidates {
  name: string;
  votes: number;
}
function findWinner(candidate: candidates[]): candidates {
  let winner = candidate[0];
  for (const candidates of candidate) {
    if (candidates.votes > winner.votes) winner = candidates;
  }
  return winner;
}
console.log(
  findWinner([
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
  ])
);
