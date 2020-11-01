const { expect } = require("@jest/globals");
const quickSort = require("../../src/2.Sort/5.quickSort");
const random = require("./random");

const randomArray = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test("quickSort", () => {
  expect(quickSort(randomArray, 0, randomArray.length - 1)).toEqual(
    sortedArray
  );
});
