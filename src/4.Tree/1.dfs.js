function dfs(root) {
  const nodeList = [];
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    nodeList.push(node);
    const { children } = node;
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }
  return nodeList;
}

module.exports = dfs;
