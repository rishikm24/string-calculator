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
})