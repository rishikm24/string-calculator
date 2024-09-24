class StringCalculator {
    /**
     * @param {string} numbers 
     * @returns {number}
     */
    add(numbers) {
        if (numbers === "")
            return 0
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimiter = new RegExp(parts[0].slice(2));
            numbers = parts[1];
        }
        const numberArr = numbers.split(delimiter)
        return numberArr.reduce((total, num) => total + parseInt(num), 0)
    }
}

module.exports = StringCalculator;