const fns = {

  moveCharacter(dirNameOrRef) {
    if (typeof dirNameOrRef === 'string') {
      let dirName = dirNameOrRef;

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
  },

  findNeighbors(cell) {
    return cell ? Object.entries(this.dirs)
      .reduce((acc, [name, coords], i) => {
        const neighbor = this.findNeighbor(cell, name);

        return neighbor && neighbor.isPassable ? { ...acc, [name]: neighbor } : acc;
      }, {}) : null;
  },

  findExit(search = 'dfs', startCell = this.characterCell) {
    return search === 'dfs' ? this.shortestPathDfs(this.characterCell, this.exitCell) :
      this.shortestPathBfs(this.characterCell, this.exitCell)
  },

  print(showPath = false) {
    if (showPath) {
      this.shortestPath = this.shortestPathBfs();
    } else this.shortestPath = null

    const output = this.#map.reduce((string, row, i) => {
      return `${string}\n${row.map(_=> {
        if (this.shortestPath && this.shortestPath.previous.has(_)) {
          return '.'
        }
        
        return _.hasCharacter === true ? characterSymbols.get(this.directionMoving || 'left') : _.symbol;
      }).join('')}`;
    }, '');

    return output;
  },

  getUnvisitedNeighbors(cell) {
    return (Object.entries(this.findNeighbors(cell)) || []).filter(([k, v]) => !v.previous);
  },

  shortestPathDfs(cell = this.characterCell, stopNode = this.exitCell) {
    if (cell === stopNode) return cell;

    let unvisitedNeighbors = this.getUnvisitedNeighbors(cell)

    if (unvisitedNeighbors.length == 0) {
      cell = cell.previous;

      unvisitedNeighbors = this.getUnvisitedNeighbors(cell)

      while (cell && unvisitedNeighbors.length === 0) {
        cell = cell.previous;

        unvisitedNeighbors = this.getUnvisitedNeighbors(cell)
      }

      return this.shortestPathDfs(cell);
    }

    else {
      this.cnt = (this.cnt || 0) + 1;

      for (var [direction, neighbor] of unvisitedNeighbors) {
        neighbor.previous = cell;

        if (neighbor === stopNode) return neighbor;

        if (neighbor !== stopNode && unvisitedNeighbors.length > 0) {
          return this.shortestPathDfs(neighbor);
        }
      }
    }

    return null; /* If no path, return null */
  }

}
