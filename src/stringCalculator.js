class StringCalculator {
    add(numbers) {
        if (numbers === "")
            return 0
        const numberArr = numbers.split(",")
        return numberArr.reduce((total, num) => total + parseInt(num), 0)
    }
}

module.exports = StringCalculator;