import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { TwoWayMap, utils } = ham;
import { bfs, shortestPathBfs } from './shortest-path.js';


const MAP_SYMBOLS = new Map([
  ['#', ((options = {}) => ({ ...{ symbol: '#', cellTypeId: 0, cellTypeName: 'barrier', direction: null, isCharacter: false, isPassable: false, }, ...options })).bind(this)],
  ['<', ((options = {}) => ({ ...{ symbol: '<', cellTypeId: 1, cellTypeName: 'character', direction: 'left', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['>', ((options = {}) => ({ ...{ symbol: '>', cellTypeId: 1, cellTypeName: 'character', direction: 'right', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['^', ((options = {}) => ({ ...{ symbol: '^', cellTypeId: 1, cellTypeName: 'character', direction: 'up', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['v', ((options = {}) => ({ ...{ symbol: 'v', cellTypeId: 1, cellTypeName: 'character', direction: 'down', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  [' ', ((options = {}) => ({ ...{ symbol: ' ', cellTypeId: 2, cellTypeName: 'ground', direction: null, isCharacter: false, isPassable: true, }, ...options })).bind(this)],
  ['x', ((options = {}) => ({ ...{ symbol: 'x', cellTypeId: 3, cellTypeName: 'exit', direction: null, isCharacter: false, isPassable: true, isExit: true }, ...options })).bind(this)],
  ['.', ((options = {}) => ({ ...{ symbol: '.', cellTypeId: 4, cellTypeName: 'path', direction: null, isCharacter: false, isPassable: true, isExit: false }, ...options })).bind(this)],
]);



const cellFactory = (symbol, options) => {
  return MAP_SYMBOLS.get(symbol)(options)
  // ({
  //   id,
  //   hasCharacter: false,
  //   position: { column, row }
  // });
};

export class CellModel {
  constructor() {
    this.root;
  }

  get prop() { return this._prop };
  set prop(newValue) { this._prop = newValue };
}

const DIRECTIONS = {
  right: [1, 0],
  down: [0, 1],
  left: [-1, 0],
  up: [0, -1],
}

const characterSymbols = new TwoWayMap([
  ['<', 'left'],
  ['>', 'right'],
  ['^', 'up'],
  ['v', 'down'],
]);


export class MazeModel {
  #map;
  #cells = null;
  #rows = [];
  #columns = null;
  #characterCell = null;
  #exitCell = null;
  #directionMoving = null;
  #isGameOver;

  constructor(map, dirs = DIRECTIONS) {
    if (map) {
      this.#map = this.setMap(map);
    }

    this.targetCell;
    this.dirs = dirs;
  }

  get isGameOver() {
    return this.exitCell === this.characterCell
  }

  set characterCell(target) {
    if (this.#characterCell) {
      this.#characterCell.hasCharacter = false;
      this.#characterCell.isPathNode = false;
    }

    if (target) {
      this.#characterCell = target;
      this.#characterCell.hasCharacter = true;
    }

    else { this.#characterCell = null }
  }

  get characterCell() { return this.#characterCell || null }

  get exitCell() {
    if (this.#exitCell) { return this.#exitCell }

    this.#exitCell = this.cells.find((cell, i) => {
      return cell.isExit === true;
    });

    return this.#exitCell || null;
  }

  get columns() { return this.#columns ? this.#columns : this.#deriveColumns() }

  get cells() { return this.#cells ? this.#cells : this.#deriveCells() }

  get rows() { return this.#map ? this.#map : [] }

  get firstCell() { return this.cell(0, 0) }

  get columnCount() { return this.map[0].length - 1 }

  get rowCount() { return this.map.length - 1 }

  get lastCell() { return this.cell(this.rowCount, this.columnCount) }

  get occupiedCell() { return this.#characterCell }

  get map() { return this.#map };

  setMap(newMap = [], ) {
    this.#columns = null;

    if (!(newMap && newMap.length)) return;

    this.#map = newMap.map((row, r) => row.split('')
      .map((symb, column) => {
        const id = 'c' + utils.uuid()

        if (characterSymbols.has(symb)) {
          this.#characterCell = cellFactory(' ', { position: { column, row: r }, id, hasCharacter: true })

          return this.#characterCell;
        }

        else if (symb.toLowerCase() === 'x') {
          this.#exitCell = cellFactory('x', { position: { column, row: r }, id, isExit: true })

          return this.#exitCell;
        }

        return cellFactory(symb, { position: { column, row: r } }, id)
      })
    ).filter(_ => _);

    return this.#map;
  }

  updateCell(r, c, updates) {
    const cell = this.cell(r, c);

    if (cell && updates) {
      Object.assign(cell, updates);
    }

    return { ...cell } || null;
  }

  isInBounds({ row, column }) { return (row >= 0 && row > 0 <= this.rowCount) && (column >= 0 && column <= this.columnCount); }

  isCharacterInBounds() {
    return (this.#characterCell.position.row > 0 && this.#characterCell.position.row < this.rowCount) &&
      (this.#characterCell.position.column > 0 && this.#characterCell.position.column < this.columnCount);
  }

  cell(row, column) {
    if ([+row, +column].includes(NaN)) return;

    return !this.isInBounds({ row, column }) ?
      null : this.#map[row][column] || null;
  }

  row(index) { return this.#map[index]; }

  moveCharacter(dirNameOrRef) {
    const prev = this.characterCell;

    if (typeof dirNameOrRef === 'string') {
      const dirName = dirNameOrRef;

      this.directionMoving = dirName;

      const neighbors = this.findNeighbors(this.characterCell);

      if (neighbors[dirName]) this.characterCell = neighbors[dirName];
    }

    else this.characterCell = dirNameOrRef;

    return this.characterCell;
  }

  findNeighbor(cell = { position: {} }, dirName) {
    if (!cell || !dirName) return;

    const dir = this.dirs[dirName];
    const { column, row } = cell.position || {};

    return this.cell(
      row + dir[1],
      column + dir[0],
    );
  }

  findNeighbors(cell) {
    return cell ? Object.entries(this.dirs)
      .reduce((acc, [name, coords], i) => {
        const neighbor = this.findNeighbor(cell, name);

        return neighbor && neighbor.isPassable ? { ...acc, [name]: neighbor } : acc;
      }, {}) : null;
  }

  findExit(search = 'dfs', startCell = this.characterCell) {
    return search === 'dfs' ?
      this.shortestPathDfs(this.characterCell, this.exitCell) :
      this.shortestPathBfs(this.characterCell, this.exitCell)
  }

  column(colIndex) {
    return this.#map.map((row, i) => this.cell(i, colIndex));
  }

  print(showPath = false) {
    if (showPath) { this.shortestPath = this.shortestPathDfs(this.characterCell, this.targetCell || this.exitCell); }

    else this.shortestPath = null;

    const output = this.#map.reduce(
      (string, row, i) => `${string}\n${
        row.map(cell=> {
        
          if (cell.isPathNode == true && !cell.hasCharacter) { return '.'; } 
          
          return cell.hasCharacter === true ? characterSymbols.get(this.directionMoving || 'left') : cell.symbol;
        }).join('')
      }`, '');

    return output;
  }

  getUnvisitedNeighbors(cell) {
    return (Object.entries(this.findNeighbors(cell)) || []).filter(([k, v]) => !v.previous);
  }

  setTargetCell(row, column) {
    this.targetCell = this.cell(+row, +column)

    let pathNode = this.shortestPathDfs(this.characterCell, this.setTargetCell)

    return pathNode;
  }


  traversePathCells(fn) {
    let pathNode = this.shortestPath();

    while (pathNode) {
      fn(pathNode);
      pathNode = pathNode.previous;
    }

    return pathNode;
  }

  shortestPathDfs(cell = this.characterCell, stopNode = this.targetCell || this.exitCell) {
    // console.warn('this.isOutOfBounds', this.isOutOfBounds(cell.position.row,cell.position.column))
    cell.isPathNode = true;

    if (cell === stopNode) {
      console.warn('~~~~~GAME OVER', this);
      this.gamesOver = true;
      return cell;
    }

    let unvisitedNeighbors = this.getUnvisitedNeighbors(cell);

    if (unvisitedNeighbors.length == 0 && cell.previous) {
      cell.isPathNode = false;
      cell = cell.previous;

      unvisitedNeighbors = this.getUnvisitedNeighbors(cell);

      while (cell && unvisitedNeighbors.length === 0) {
        cell.isPathNode = false;
        cell = cell.previous;

        unvisitedNeighbors = this.getUnvisitedNeighbors(cell);
      }

      return this.shortestPathDfs(cell);
    }

    else {
      this.cnt = (this.cnt || 0) + 1;

      for (let [direction, neighbor] of unvisitedNeighbors) {
        neighbor.previous = cell;

        if (unvisitedNeighbors.length > 0) {
          return this.shortestPathDfs(neighbor);
        }

        else { return cell }
      }
    }

    return cell; /* If no path, return null */
  };

  shortestPathBfs(startNode = this.characterCell, stopNode = this.exitCell) {
    const previous = new Map();
    const visited = new Set();
    const queue = [];

    queue.push({ node: startNode, dist: 0 });

    visited.add(startNode);

    while (queue.length > 0) {
      const {
        node,
        dist
      } = queue.shift();

      if (node === stopNode) return { shortestDistande: dist, previous };

      const neighbors = Object.entries(this.findNeighbors(node))

      for (let [dirName, neighbor] of neighbors) {
        // for (let neighbor of neighbors) {
        // const dirName = this.getDirName(node, neighbor);
        neighbor.direction = dirName

        if (!visited.has(neighbor)) {
          previous.set(neighbor, node);
          queue.push({ node: neighbor, dist: dist + 1 })
          visited.add(neighbor);
        }
      }
    }

    return { shortestDistance: -1, previous };
  };

  #deriveCells() {
    return this.#map.reduce((cells, row, i) => [...cells, ...row], []);
  }

  #deriveColumns() {
    let cols = [];

    for (let col = 0; col <= this.columnCount; col++) {
      cols = [...cols, this.column(col)];
    }

    return cols;
  }
}