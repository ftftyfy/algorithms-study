const { expect } = require("@jest/globals");
const mergeSort = require("../../src/2.Sort/4.mergeSort");
const random = require("./random");

const randomArray = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test("mergeSort", () => {
  expect(mergeSort(randomArray)).toEqual(sortedArray);
});
