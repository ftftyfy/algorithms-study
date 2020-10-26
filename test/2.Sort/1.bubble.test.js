const { expect } = require("@jest/globals");
const bubble = require("../../src/2.Sort/1.bubble");
const random = require("./random");

const randomArray = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test("bubble", () => {
  expect(bubble(randomArray)).toEqual(sortedArray);
});
