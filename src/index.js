function isEvenOrOdd(param) {

    if(isNaN(param)) {
        return 'Error: the parameter is not a number'
    }

    return param % 2 === 0 ? 'Even' : 'Odd'
} 

module.exports = isEvenOrOdd;

console.log(isEvenOrOdd(2)); // Even
console.log(isEvenOrOdd(3)); // Odd
console.log(isEvenOrOdd('a')); // Error: the parameter is not a number