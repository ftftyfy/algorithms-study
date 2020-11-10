const d = { name: "d", children: [] };
const e = { name: "e", children: [] };
const f = { name: "f", children: [] };

const i = { name: "i", children: [] };
const g = { name: "g", children: [i] };

const h = { name: "h", children: [] };

const b = { name: "b", children: [d, e, f] };
const c = { name: "c", children: [g, h] };

const a = { name: "a", children: [b, c] };

const dfsResult = ["a", "b", "d", "e", "f", "c", "g", "i", "h"];
const bfsResult = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

module.exports = {
  root: a,
  dfsResult,
  bfsResult,
};
