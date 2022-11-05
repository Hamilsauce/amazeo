
export const MAP_SYMBOLS = new Map([
  ['0', ((options = {}) => ({ ...{ symbol: '0', tileTypeId: 0, tileType: 'empty', direction: null, hasCharacter: false, isPassable: false, isExit: false}, ...options })).bind(this)],
  ['#', ((options = {}) => ({ ...{ symbol: '#', tileTypeId: 0, tileType: 'barrier', direction: null, hasCharacter: false, isPassable: false, isExit: false}, ...options })).bind(this)],
  ['<', ((options = {}) => ({ ...{ symbol: '<', tileTypeId: 1, tileType: 'character', direction: 'left', hasCharacter: true, isPassable: false, isExit: false}, ...options })).bind(this)],
  ['>', ((options = {}) => ({ ...{ symbol: '>', tileTypeId: 1, tileType: 'character', direction: 'right', hasCharacter: true, isPassable: false, isExit: false}, ...options })).bind(this)],
  ['^', ((options = {}) => ({ ...{ symbol: '^', tileTypeId: 1, tileType: 'character', direction: 'up', hasCharacter: true, isPassable: false, isExit: false}, ...options })).bind(this)],
  ['v', ((options = {}) => ({ ...{ symbol: 'v', tileTypeId: 1, tileType: 'character', direction: 'down', hasCharacter: true, isPassable: false, isExit: false}, ...options })).bind(this)],
  [' ', ((options = {}) => ({ ...{ symbol: ' ', tileTypeId: 2, tileType: 'ground', direction: null, hasCharacter: false, isPassable: true, isExit: false}, ...options })).bind(this)],
  ['x', ((options = {}) => ({ ...{ symbol: 'x', tileTypeId: 3, tileType: 'exit', direction: null, hasCharacter: false, isPassable: true, isExit: true }, ...options })).bind(this)],
  ['.', ((options = {}) => ({ ...{ symbol: '.', tileTypeId: 4, tileType: 'path', direction: null, hasCharacter: false, isPassable: true, isExit: false }, ...options })).bind(this)],
]);

export const DIRECTIONS = {
  right: [1, 0],
  down: [0, 1],
  left: [-1, 0],
  up: [0, -1],
}

export const characterSymbols = new TwoWayMap([
  ['<', 'left'],
  ['>', 'right'],
  ['^', 'up'],
  ['v', 'down'],
]);
