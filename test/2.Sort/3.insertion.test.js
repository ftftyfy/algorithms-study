const { expect } = require("@jest/globals");
const insertion = require("../../src/2.Sort/3.insertion");
const random = require("./random");

const randomArray = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test("insertion", () => {
  expect(insertion(randomArray)).toEqual(sortedArray);
});
