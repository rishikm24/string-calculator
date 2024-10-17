class StringCalculator {
    /**
     * @param {string} numbers 
     * @returns {number}
     */
    compute(numbers) {
        let multiply = false
        if (numbers === "")
            return 0
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            if (parts[0] == '//*') {
                multiply = true
                parts[0] = '//\\*'
            }
            delimiter = new RegExp(parts[0].slice(2));
            numbers = parts[1];
        }
        const numberArr = numbers.split(delimiter).filter(o => o !== '')
        let negatives = []
        let total = 0
        if (multiply) {
            for (let num of numberArr) {
                total *= num
            }
        } else {
            total = numberArr.reduce((total, num) => {
                let value = parseInt(num)
                if (value < 0) {
                    negatives.push(value)
                }
                if (value > 1000) value = 0
                return total + value
            }, 0)
        }
        if (negatives.length) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`)
        }
        return total
    }
}

module.exports = StringCalculator;