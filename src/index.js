function isEvenOrOdd(param) {

    if(isNaN(param)) {
        return 'Error: the parameter is not a number'
    }

    if(param % 2 === 0)
        return 'Even'
    else
        return 'Odd'
}

function sum(a, b) {

    return a + b
}

function sub(a, b) {

    return a - b
}

function divide(a, b) {

    return a % b
}

function multiply(a, b) {

    return a * b
}

module.exports = isEvenOrOdd;

console.log(isEvenOrOdd(2)); // Even
console.log(isEvenOrOdd(3)); // Odd
console.log(isEvenOrOdd('a')); // Error: the parameter is not a number