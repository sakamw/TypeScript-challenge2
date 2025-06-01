// Challenge 1: Sum of Positives
var sumOfPositives = function (numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > 0)
            sum += num;
    }
    return sum;
};
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
// Challenge 2: Find Maximum Value
var findMax = function (numbers) {
    var max = numbers[0];
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var num = numbers_2[_i];
        if (num > max)
            max = num;
    }
    return max;
};
console.log(findMax([3, 7, 2, 9, 5]));
function findWinner(candidate) {
    var winner = candidate[0];
    for (var _i = 0, candidate_1 = candidate; _i < candidate_1.length; _i++) {
        var candidates = candidate_1[_i];
        if (candidates.votes > winner.votes)
            winner = candidates;
    }
    return winner;
}
console.log(findWinner([
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
]));
// Challenge 4: Longest Word
var findLongestWord = function (words) {
    var longestWord = words[0];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longestWord.length)
            longestWord = word;
    }
    return longestWord;
};
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
// Challenge 5: Count Properties
var countProperties = function (object) {
    return Object.keys(object).length;
};
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
// Challenge 6: Filter by Length
var filterByLength = function (strings, minLenght) {
    var result = [];
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        if (str.length >= minLenght)
            result.push(str);
    }
    return result;
};
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// Chlallenge 7: Sum of Even Numbers
var sumEvenNumbers = function (even) {
    var sum = 0;
    for (var _i = 0, even_1 = even; _i < even_1.length; _i++) {
        var num = even_1[_i];
        if (num % 2 === 0)
            sum += num;
    }
    return sum;
};
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
// Challenge 8: Difference Between Sum of Even and Odd Numbers
var differenceEvenOdd = function (numbers) {
    var sumEven = 0;
    var sumOdd = 0;
    for (var _i = 0, numbers_3 = numbers; _i < numbers_3.length; _i++) {
        var num = numbers_3[_i];
        if (num % 2 === 0) {
            sumEven += num;
        }
        else
            sumOdd += num;
    }
    return sumEven - sumOdd;
};
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
// Challenge 9: Count Truthy
var countTruthy = function (object) {
    var count = 0;
    for (var key in object) {
        if (object[key])
            count++;
    }
    return count;
};
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
