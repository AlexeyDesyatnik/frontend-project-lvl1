import { randInt } from '../utils.js';

const taskDescription = 'What number is missing in the progression?';

const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 1;
const MAX_STEP = 10;
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;

const makeProgression = () => {
  const start = randInt(MIN_START, MAX_START);
  const step = randInt(MIN_STEP, MAX_STEP);
  const len = randInt(MIN_LENGTH, MAX_LENGTH);
  const progression = [];
  for (let i = 0, n = start; i < len; i += 1, n += step) {
    progression.push(n);
  }
  return progression;
};

const makeQuestion = () => {
  const progression = makeProgression();
  const skip = randInt(0, progression.length);
  const strProgression = progression.map(
    (val, idx) => ((idx === skip) ? '..' : val.toString()),
  );
  const question = strProgression.join(' ');
  const correctAnswer = progression[skip].toString();
  return { question, correctAnswer };
};

export { taskDescription, makeQuestion };
