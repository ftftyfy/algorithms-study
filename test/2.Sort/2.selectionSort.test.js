const { expect } = require("@jest/globals");
const selectionSort = require("../../src/2.Sort/2.selectionSort");
const random = require("./random");

const randomArray = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test("selectionSort", () => {
  expect(selectionSort(randomArray)).toEqual(sortedArray);
});
