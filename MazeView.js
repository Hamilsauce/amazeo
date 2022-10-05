import { template } from './lib/templater.js';
import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { date, array, utils, text } = ham;

const cell = {
  symbol: "#",
  cellTypeId: 0,
  cellTypeName: "barrier",
  isPassable: false,
  id: "ctuv84hulg8skl8vc6au",
  hasCharacter: false,
  position: { column: 0, row: 0 }
}

// data-is-passable="false"
export class View {
  #self;

  constructor(name) {
    if (!name) return;

    this.#self = template(name);
  }

  render(state = {}) {}

  get self() { return this.#self };
}



export class CellView extends View {
  
  
  constructor() {
    super('cell');
    
  }

  static createCell(cellOptions) {
    return Object.assign(new Cell(), cellOptions || {})
  }

  insertCell() {}

  render() {}

  get prop() { return this.#prop };
  set prop(newValue) { this.#prop = newValue };
}

export class MazeView extends View {
  #cells = [];

  constructor() {

    super('maze')
  }

  createCell() {
    return ``
  }

  insertCell() {}

  render() {}

  get prop() { return this._prop };
  set prop(newValue) { this._prop = newValue };
}
