import { Model } from './model.js';

export const TileSchema = {
  symbol: String,
  tileTypeId: Number,
  tileTypeName: String,
  direction: String,
  isCharacter: Boolean,
  isPassable: Boolean,
  isExit: Boolean,
  isStart: Boolean,
  isPathNode: Boolean,
};


export const tileSchemas = new Map([
  ['barrier', ((options = {}) => ({ ...{ symbol: '#', tileTypeId: 0, tileType: 'barrier', direction: null, isCharacter: false, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: '<', tileTypeId: 1, tileType: 'character', direction: 'left', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: '>', tileTypeId: 1, tileType: 'character', direction: 'right', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: '^', tileTypeId: 1, tileType: 'character', direction: 'up', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['character', ((options = {}) => ({ ...{ symbol: 'v', tileTypeId: 1, tileType: 'character', direction: 'down', hasCharacter: true, isPassable: false, }, ...options })).bind(this)],
  ['ground', ((options = {}) => ({ ...{ symbol: ' ', tileTypeId: 2, tileType: 'ground', direction: null, isCharacter: false, isPassable: true, }, ...options })).bind(this)],
  ['start', ((options = {}) => ({ ...{ symbol: '$', tileTypeId: 3, tileType: 'start', direction: null, isCharacter: false, isPassable: true, isExit: true }, ...options })).bind(this)],
  ['exit', ((options = {}) => ({ ...{ symbol: 'x', tileTypeId: 4, tileType: 'exit', direction: null, isCharacter: false, isPassable: true, isExit: true }, ...options })).bind(this)],
  ['path', ((options = {}) => ({ ...{ symbol: '.', tileTypeId: 5, tileType: 'path', direction: null, isCharacter: false, isPassable: true, isExit: false }, ...options })).bind(this)],
  ['target', ((options = {}) => ({ ...{ symbol: '@', tileTypeId: 6, tileType: 'target', direction: null, isCharacter: false, isPassable: true, isExit: true }, ...options })).bind(this)],
]);



const tileFactory = (symbol, options) => {
  return MAP_SYMBOLS.get(symb)({ id, hasCharacter: false, position: { column, row: r } });
};

export class TileModel extends Model {
  constructor() {
    super('tile');
    this.root;
  }

  static create({ address, tileType }) {
    const c = Object.assign(new TileModel(), { address, tileType });

    return c;
  }


  get prop() { return this._prop };
  set prop(newValue) { this._prop = newValue };
}
