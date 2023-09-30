const isEvenOrOdd  = require("../src/index.js")

// test('Should return error message when is not a number', () => {
//     expect(isEvenOrOdd("a")).toBe("Error: the parameter is not a number");
// })

test('Should return EVEN', () => {
    expect(isEvenOrOdd(2)).toBe("Even");
})

test('Should return ODD', () => {
    expect(isEvenOrOdd(3)).toBe("Odd");
})