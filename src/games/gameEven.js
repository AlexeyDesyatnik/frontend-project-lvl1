import randInt from '../randInt.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const makeQuestion = () => {
  const question = randInt(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { taskDescription, makeQuestion };
