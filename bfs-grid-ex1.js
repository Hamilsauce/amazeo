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

const bfs = (from, to) => {
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
        queue.push(child)
      }
    }
  }
}


console.log(bfs([0, 0], [4, 4]))
console.log(bfs([0, 0], [4, 4]).length)