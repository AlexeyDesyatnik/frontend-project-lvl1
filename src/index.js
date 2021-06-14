import { runGame } from './cli.js';
import * as gameEven from './games/gameEven.js';
import * as gameCalc from './games/gameCalc.js';
import * as gameGCD from './games/gameGCD.js';
import * as gameProgression from './games/gameProgression.js';

const runGameEven = () => {
  runGame(gameEven.taskDescription, gameEven.makeQuestion);
};

const runGameCalc = () => {
  runGame(gameCalc.taskDescription, gameCalc.makeQuestion);
};

const runGameGCD = () => {
  runGame(gameGCD.taskDescription, gameGCD.makeQuestion);
};

const runGameProgression = () => {
  runGame(gameProgression.taskDescription, gameProgression.makeQuestion);
};

export {
  runGameEven,
  runGameCalc,
  runGameGCD,
  runGameProgression,
};
