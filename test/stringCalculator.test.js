const StringCalculator = require('../src/stringCalculator')

describe('String calculator', () => {
    test('returns 0 for an empty string', () => {
        const calculator = new StringCalculator()
        expect(calculator.add("")).toBe(0)
    })
})