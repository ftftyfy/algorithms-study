const binarySearch = require("../../src/3.BinarySearch/1.binarySearch");

const array = [1, 3, 4, 7, 10, 11, 13, 16, 17, 19, 20];

test("binarySearch", () => {
  expect(binarySearch(array, 1)).toBe(0);
  expect(binarySearch(array, 2)).toBe(-1);
  expect(binarySearch(array, 10)).toBe(4);
  expect(binarySearch(array, 11)).toBe(5);
  expect(binarySearch(array, 13)).toBe(6);
  expect(binarySearch(array, 17)).toBe(8);
  expect(binarySearch(array, 18)).toBe(-1);
  expect(binarySearch(array, 19)).toBe(9);
  expect(binarySearch(array, 20)).toBe(10);
  expect(binarySearch(array, 21)).toBe(-1);
});
