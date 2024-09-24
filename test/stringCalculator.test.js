const StringCalculator = require('../src/stringCalculator')

describe('String calculator', () => {
    test('returns 0 for an empty string', () => {
        const calculator = new StringCalculator()
        expect(calculator.add("")).toBe(0)
    })

    test('returns the value for a single number', () => {
        const calculator = new StringCalculator()
        expect(calculator.add("1")).toBe(1)
    })

    test('returns the sum of two numbers', () => {
        const calculator = new StringCalculator()
        expect(calculator.add("1,5")).toBe(6)
    })

    test('returns the sum of multiple numbers', () => {
        const calculator = new StringCalculator()
        expect(calculator.add("10,20,30,40")).toBe(100)
    })

    test('returns the sum of numbers having new lines as delimiter', () => {
        const calculator = new StringCalculator()
        expect(calculator.add("10\n20,30")).toBe(60)
    })

    test('returns the sum of numbers having custom delimiters', () => {
        const calculator = new StringCalculator()
        expect(calculator.add("//;\n1;2")).toBe(3)
    })

    test('throws an error when negative numbers are provided', () => {
        const calculator = new StringCalculator()
        expect(() => calculator.add("1,-2,3")).toThrow('negative numbers not allowed: -2')
    })

    test('throws an error when multiple negative numbers are provided', () => {
        const calculator = new StringCalculator()
        expect(() => calculator.add("-1,-2,-3")).toThrow('negative numbers not allowed: -1,-2,-3')
    })
})