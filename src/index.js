import { runGame } from './cli.js';
import * as gameEven from './games/gameEven.js';
import * as gameCalc from './games/gameCalc.js';

const runGameEven = () => {
  runGame(gameEven.taskDescription, gameEven.makeQuestion);
};

const runGameCalc = () => {
  runGame(gameCalc.taskDescription, gameCalc.makeQuestion);
};

export { runGameEven, runGameCalc };
