function deepReduce(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            sum += numbers[i];
        } else {
            sum += deepReduce(numbers[i]);
        }
    }

    return sum;
}

module.exports = deepReduce;
