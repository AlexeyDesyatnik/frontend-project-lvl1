import { randInt, isPrime } from '../utils.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const makeQuestion = () => {
  const n = randInt(MIN_NUMBER, MAX_NUMBER);
  const question = n.toString();
  const correctAnswer = (isPrime(n)) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { taskDescription, makeQuestion };
