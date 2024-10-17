const StringCalculator = require('../src/stringCalculator')

describe('String calculator', () => {
    test('returns 0 for an empty string', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("")).toBe(0)
    })

    test('returns the value for a single number', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("1")).toBe(1)
    })

    test('returns the sum of two numbers', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("1,5")).toBe(6)
    })

    test('returns the sum of multiple numbers', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("10,20,30,40")).toBe(100)
    })

    test('returns the sum of numbers having new lines as delimiter', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("10\n20,30")).toBe(60)
    })

    test('returns the sum of numbers having custom delimiters', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("//;\n1;2")).toBe(3)
    })

    test('throws an error when negative numbers are provided', () => {
        const calculator = new StringCalculator()
        expect(() => calculator.compute("1,-2,3")).toThrow('negative numbers not allowed: -2')
    })

    test('throws an error when multiple negative numbers are provided', () => {
        const calculator = new StringCalculator()
        expect(() => calculator.compute("-1,-2,-3")).toThrow('negative numbers not allowed: -1,-2,-3')
    })

    test('return the sum ignoring numbers greater than 1000', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("10,20,1001,30")).toBe(60)
    })

    test('returns the sum of numbers having custom delimiters of any length', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("//[***]\n1***2***3")).toBe(6)
    })

    test('returns the product of numbers when the custom delimiter is an asterick', () => {
        const calculator = new StringCalculator()
        expect(calculator.compute("//*\n2*3")).toBe(6)
    })
})