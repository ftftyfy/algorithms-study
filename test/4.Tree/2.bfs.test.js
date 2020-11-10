const { expect } = require("@jest/globals");
const bfs = require("../../src/4.Tree/2.bfs");
const { root, bfsResult } = require("./data");

test("bfs", () => {
  const result = bfs(root).map(({ name }) => name);
  expect(result).toEqual(bfsResult);
});
