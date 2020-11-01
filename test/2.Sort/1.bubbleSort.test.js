const { expect } = require("@jest/globals");
const bubbleSort = require("../../src/2.Sort/1.bubbleSort");
const random = require("./random");

const randomArray = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test("bubbleSort", () => {
  expect(bubbleSort(randomArray)).toEqual(sortedArray);
});
