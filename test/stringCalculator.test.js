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
})