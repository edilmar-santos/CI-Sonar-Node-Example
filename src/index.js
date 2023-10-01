function isEvenOrOdd(param) {

    if(isNaN(param)) {
        return 'Error: the parameter is not a number'
    }

    return param % 2 === 0 ? 'Even' : 'Odd' 
}

function sum(a, b) {

    return a + b
}

function sub(a, b) {

    return a - b
}

function divide(a, b) {

    return a / b
}

function multiply(a, b) {

    return a * b
}

module.exports = {
    isEvenOrOdd,
    sum,
    sub,
    divide,
    multiply
};