import randInt from '../randInt.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const findGCD = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

const makeQuestion = () => {
  const a = randInt(MIN_NUMBER, MAX_NUMBER);
  const b = randInt(MIN_NUMBER, MAX_NUMBER);
  const gcd = findGCD(a, b);
  const question = `${a} ${b}`;
  const correctAnswer = gcd.toString();
  return { question, correctAnswer };
};

export { taskDescription, makeQuestion };
