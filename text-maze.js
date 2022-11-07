import { SMALLESTMAZE, BIGMAZE } from './maze-maps.js';
import { MazeModel } from './MazeModel.js';
import { bfs } from './shortest-path.js';
import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { TwoWayMap } = ham;
const { forkJoin, Observable, iif, BehaviorSubject, AsyncSubject, Subject, interval, of , fromEvent, merge, empty, delay, from } = rxjs;
const { takeWhile, flatMap, reduce, groupBy, toArray, mergeMap, switchMap, scan, map, tap, filter } = rxjs.operators;
const { fromFetch } = rxjs.fetch;



export class AppController {
  #mazeModel;
  #mapControlView;
  #mapDisplay = document.querySelector('#maze-display');

  constructor(mazeModel, mapControlView) {
    this.#mazeModel = mazeModel;
    this.#mapControlView = mapControlView;

    this.gameOver$ = this.#mapControlView.buttonEventStream$
      .pipe(
        takeWhile(() => !this.#mazeModel.isCharacterInBounds()),
        tap(() => { this.render(true) }),
        tap(x => console.log('GAME OVER', x)),
      );

    this.moveSubscription = this.#mapControlView.buttonEventStream$
      .pipe(
        filter(_ => _),
        tap(dir => { this.#mazeModel.moveCharacter(dir); }),
        tap(x => document.querySelector('#move-count').textContent = (+document.querySelector('#move-count').textContent || 0) + 1),
        tap(() => { this.render() }),
        switchMap(() => this.gameOver$),
        takeWhile(() => this.#mazeModel.isCharacterInBounds()),
      )
      .subscribe();
  }

  render(gameOver = false) {
    this.#mapDisplay.innerHTML = '';
    if (gameOver) {
      this.#mapDisplay.textContent = 'VERY GOOD';
    }

    else {
      this.#mapDisplay.textContent = this.#mazeModel.print(true);
    }
  }
}

export class MazeControlsView {
  #buttons;
  #self;

  constructor() {
    this.buttonEventSubject$ = new BehaviorSubject(null)

    this.buttonEvents$ = fromEvent(this.self, 'click');

    this.buttonEvents$.subscribe(this.buttonEventSubject$);

    this.buttonEventStream$ = this.buttonEventSubject$.asObservable()
      .pipe(
        filter(_ => _ && _.target),
        map(x => x.target.dataset.direction),
        // tap(x => console.log('x', x)),
      );
  }

  get self() {
    if (this.#self) return this.#self;

    this.#self = document.querySelector('#controls');

    return this.#self;
  }

  get buttons() {
    if (this.#buttons) return this.#buttons;

    this.#buttons = document.querySelector('#controls');

    return this.#buttons;
  }
}

const activeMaze = new MazeModel(BIGMAZE);
const mazeControls = new MazeControlsView();

const app = new AppController(
  activeMaze,
  mazeControls
);

const content = document.querySelector('pre');
content.innerHTML = '';

content.textContent = activeMaze.print(true)

const shortestPathDfs = activeMaze.shortestPathDfs;

// setInterval(() => {
//   // activeMaze.characterCell = pathList.shift();
//   // let curr = pathList.pop();
//   activeMaze.moveCharacter(pathList.shift().direction);
//   content.innerHTML = '';
//   content.textContent = activeMaze.print()
//   // console.log('activeMaze.characterCell', activeMaze.characterCell)
//   // console.log(' ', );
// }, 200)



let oppositeDirMap = new TwoWayMap([
  ['up', 'down'],
  ['left', 'right'],
]);

let moveCounter = document.querySelector('#move-count');
let pointer = 0;
let pathLength = 0;

let curr = activeMaze.shortestPath
let path = []

while (curr) {
  let previous = curr.previous
  if (previous) {

    if (curr.position.column - previous.position.column > 0) {
      previous.direction = 'left'
    }
    else if (curr.position.column - previous.position.column < 0) {
      previous.direction = 'right'

    }

    if (curr.position.row - previous.position.row > 0) {
      previous.direction = 'up'
    }
    else if (curr.position.row - previous.position.row < 0) {
      previous.direction = 'down'

    }
  }

  path.push(curr)
  pathLength++
  curr = curr.previous
}

path.reverse();
curr = path[pointer];
console.log('curr', curr)
const startPathFind = (intervalFn, interval = 80) => {};

const gameLoop = (pathState) => {
  if ((curr && curr.isExit)) {
    pathState.stop();
    return;
  }

  let oppositeDir = oppositeDirMap.get(curr.direction || 'left');

  if (pointer < pathLength) {
    moveCounter.textContent = pointer
    activeMaze.directionMoving = oppositeDir;
    console.log('activeMaze.directionMoving', activeMaze.directionMoving)

    activeMaze.moveCharacter(curr);

    content.innerHTML = '';
    content.textContent = activeMaze.print(false);

    pointer++;
    curr = path[pointer];
  }
}

const runPath = (loop) => {
  const pathState = {
    current: null,
    intervalHandle: null,
    stop() {
      if (!!this.intervalHandle) {
        clearInterval(this.intervalHandle);
        this.intervalHandle = null
      }
    }
  };

  pathState.intervalHandle = setInterval(() => loop(pathState), 50);

};


runPath(gameLoop)
// setTimeout(() => {
//   activeMaze.moveCharacter('down');
//   content.innerHTML = '';
//   content.textContent = activeMaze.print()
//   console.log('activeMaze.characterCell', activeMaze.characterCell)
//   console.log('setTimeout ', );
// }, 6000)
