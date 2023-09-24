function isEvenOrOdd(param) {

    if(isNaN(param)) {
        return 'Error: the parameter is not a number'
    }

    return param % 2 === 0 ? 'Even' : 'Odd'
} 

module.exports = isEvenOrOdd;