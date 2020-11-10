function bfs(root) {
  const nodeList = [];
  const queue = [];
  queue.unshift(root);
  while (queue.length > 0) {
    const node = queue.shift();
    nodeList.push(node);
    const { children } = node;
    for (let i = 0; i < children.length; i++) {
      queue.push(children[i]);
    }
  }
  return nodeList;
}

module.exports = bfs;
