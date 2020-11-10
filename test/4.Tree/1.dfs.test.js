const { expect } = require("@jest/globals");
const dfs = require("../../src/4.Tree/1.dfs");
const { root, dfsResult } = require("./data");

test("dfs", () => {
  const result = dfs(root).map(({ name }) => name);
  expect(result).toEqual(dfsResult);
});
