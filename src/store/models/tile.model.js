import { Model } from './model.js';

export const TileSchema = {
  symbol: String,
  tileTypeId: Number,
  tileType: String,
  direction: String,
  hasCharacter: Boolean,
  isPassable: Boolean,
  isExit: Boolean,
  isStart: Boolean,
  isPathNode: Boolean,
};

export const tileSchemas = new Map([
  ['barrier', ((options = {}) => ({ ...{ symbol: '#', tileTypeId: 0, tileType: 'barrier', direction: null, hasCharacter: false, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: '<', tileTypeId: 1, tileType: 'character', direction: 'left', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: '>', tileTypeId: 1, tileType: 'character', direction: 'right', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: '^', tileTypeId: 1, tileType: 'character', direction: 'up', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: 'v', tileTypeId: 1, tileType: 'character', direction: 'down', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['ground', ((options = {}) => ({ ...{ symbol: ' ', tileTypeId: 2, tileType: 'ground', direction: null, hasCharacter: false, isPassable: true, }, ...options })).bind(this)],
  ['start', ((options = {}) => ({ ...{ symbol: '$', tileTypeId: 3, tileType: 'start', direction: null, hasCharacter: false, isPassable: true, isExit: false }, ...options })).bind(this)],
  ['exit', ((options = {}) => ({ ...{ symbol: 'x', tileTypeId: 4, tileType: 'exit', direction: null, hasCharacter: false, isPassable: true, isExit: true }, ...options })).bind(this)],
  ['path', ((options = {}) => ({ ...{ symbol: '.', tileTypeId: 5, tileType: 'path', direction: null, hasCharacter: false, isPassable: true, isExit: false }, ...options })).bind(this)],
  ['target', ((options = {}) => ({ ...{ symbol: '@', tileTypeId: 6, tileType: 'target', direction: null, hasCharacter: false, isPassable: true, isExit: false }, ...options })).bind(this)],
]);

const tileFactory = (symbol, options) => {
  return MAP_SYMBOLS.get(symb)({ id, hasCharacter: false, position: { column, row: r } });
};

export class TileModel extends Model {
  #address;
  #symbol = null;
  #tileTypeId = null;
  #tileType = null;
  #direction = null;
  #hasCharacter = false;
  #isPassable = false;
  #isExit = false;
  #isStart = false;
  #isPathNode = false;

  constructor(address, options) {
    super('tile');
    this.root;
  }

  static create({ address, tileType }) {
    const c = Object.assign(new TileModel(), { address, tileType });

    return c;
  }

  get symbol() { return this.#symbol }

  set symbol(v) { this.#symbol = v }

  get tileTypeId() { return this.#tileTypeId }

  set tileTypeId(v) { this.#tileTypeId = v }

  get tileType() { return this.#tileType }

  set tileType(v) { this.#tileType = v }

  get hasCharacter() { return this.#hasCharacter }

  set hasCharacter(v) { this.#hasCharacter = v }

  get isPassable() { return this.#isPassable }

  set isPassable(v) { this.#isPassable = v }

  get isExit() { return this.#isExit }

  set isExit(v) { this.#isExit = v }

  get isStart() { return this.#isStart }

  set isStart(v) { this.#isStart = v }

  get isPathNode() { return this.#isPathNode }

  set isPathNode(v) { this.#isPathNode = v }
}
