// Sum of Positives
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
// Find Maximum Value
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
