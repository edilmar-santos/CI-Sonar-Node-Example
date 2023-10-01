const { isEvenOrOdd, sum, sub, divide, multiply }  = require("../src/index.js")

test('Should return error message when is not a number', () => {
    expect(isEvenOrOdd("a")).toBe("Error: the parameter is not a number");
})

test('Should return EVEN', () => {
    expect(isEvenOrOdd(2)).toBe("Even");
})

test('Should return ODD', () => {
    expect(isEvenOrOdd(3)).toBe("Odd");
})

test('Should return 6', () => {
    expect(sum(3,3)).toBe(6);
})

test('Should return 0', () => {
    expect(sub(3,3)).toBe(0);
})

test('Should return 1', () => {
    expect(divide(3,3)).toBe(1);
})

test('Should return 9', () => {
    expect(multiply(3,3)).toBe(9);
})