/*Use reduce() to calculate the sum of the values in an array*/
function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    return array.reduce(function(prev, cur) { return prev + cur; }, 0);
}

var someNumbers = [1,2,3,4,5,6,7,8,9,10];

console.log(sum(someNumbers)); // should return 55