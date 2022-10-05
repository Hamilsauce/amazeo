const m = [
  ['A', 'A', 'A', 'B', 'A'],
  ['B', 'B', 'B', 'B', 'B'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'B', 'B', 'B', 'B'],
  ['A', 'A', 'A', 'A', 'A']
];

// replace with findNeighbors
let successors = ([col, row], m) => {
  let connectedCells = [
    [col - 1, row],
    [col, row - 1],
    [col + 1, row],
    [col, row + 1]
  ]

  const validCells = connectedCells.filter(
    (cell) => (
      cell[0] >= 0 && cell[0] < m.length &&
      cell[1] >= 0 && cell[1] < m[0].length)
  )

  const successors = validCells.filter(
    (cell) => (m[cell[0]][cell[1]] !== m[col][row])
  )

  return successors
}

const buildPath = (traversalTree, to) => {
  let pathStack = [to]

  let parent = traversalTree[to]

  while (parent) {
    pathStack.push(parent)
    parent = traversalTree[parent]
  }

  const pathQueue = pathStack.reverse();

  return pathQueue;
}

export const bfs = (from, to) => {
  let traversalTree = []
  let visited = new Set()
  let queue = []

  queue.push(from)

  while (queue.length) {
    let subtreeRoot = queue.shift()

    visited.add(subtreeRoot.toString())

    if (subtreeRoot.toString() == to.toString())
      return buildPath(traversalTree, to)

    for (let child of successors(subtreeRoot, m)) {
      if (!visited.has(child.toString())) {
        traversalTree[child] = subtreeRoot
        console.log('traversalTree[child]', traversalTree[child])
        queue.push(child)
      }
    }
  }
}

export const shortestPathBfs = (startNode, stopNode) => {
const adjacencyList = new Map();
  const previous = new Map();
  const visited = new Set();
  const queue = [];
  queue.push({ node: startNode, dist: 0 });
  visited.add(startNode);

  while (queue.length > 0) {
    const { node, dist } = queue.shift();
    if (node === stopNode) return { shortestDistande: dist, previous };

    for (let neighbour of adjacencyList.get(node)) {
      if (!visited.has(neighbour)) {
        previous.set(neighbour, node);
        queue.push({ node: neighbour, dist: dist + 1 });
        visited.add(neighbour);
      }
    }
  }
  return { shortestDistance: -1, previous };
};


console.log(bfs([0, 0], [4, 4]))
console.log(bfs([0, 0], [4, 4]).length)
