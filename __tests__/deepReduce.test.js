const deepReduce = require("../deepReduce");

describe("deepReduce", () => {
    test("returns a number", () => {
        const input = [0];

        const actual = deepReduce(input);

        expect(typeof actual).toBe("number");
    });
    test("sums number in given arrays", () => {
        expect(deepReduce([8])).toBe(8);
        expect(deepReduce([12])).toBe(12);
    });
    test("iterates to sum all number elements", () => {
        const numbers = [1, 2, 3, 4, 5];

        const actual = deepReduce(numbers);

        expect(actual).toBe(15);
    });
    test("includes sum of numbers in a sub array as part of total", () => {
        const numbers = [2, 4, [6, 8], 10];

        const actual = deepReduce(numbers);

        expect(actual).toBe(30);
    });
    test("sums all numbers in any nested sub arrays at any level of nesting", () => {
        const numbers = [3, [4, 2, [9, 7], 5, 1], 3];

        const actual = deepReduce(numbers);

        expect(actual).toBe(34);
    });
});
