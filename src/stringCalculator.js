class StringCalculator {
    /**
     * @param {string} numbers 
     * @returns {number}
     */
    compute(numbers) {
        if (numbers === "")
            return 0
        const { numberArr, multiply } = this.handleDelimters(numbers)
        let negatives = []
        for (let num of numberArr) {
            if (num < 0) negatives.push(num)
        }
        if (negatives.length) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`)
        }
        if (multiply) {
            return this.multiply(numberArr)
        } else {
            return this.add(numberArr)
        }
    }

    add(numbers) {
        return numbers.reduce((total, num) => {
            let value = parseInt(num)
            if (value > 1000) value = 0
            return total + value
        }, 0)

    }

    handleDelimters(numbers = "") {
        let multiply = false
        let numberArr = []
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            if (parts[0] == '//*') {
                multiply = true
                parts[0] = '//\\*'
            }
            delimiter = new RegExp(parts[0].slice(2));
            numbers = parts[1];
            numberArr = numbers.split(delimiter).filter(o => o !== '')
        } else {
            numberArr = numbers.split(delimiter)
        }
        return { numberArr, multiply }
    }

    subtract(numbers) {

    }

    multiply(numbers) {
        let total = 1
        for (let num of numbers) {
            total *= num
        }
        return total
    }
}

module.exports = StringCalculator;