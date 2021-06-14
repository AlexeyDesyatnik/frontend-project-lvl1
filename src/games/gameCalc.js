import { randInt } from '../utils.js';

const taskDescription = 'What is the result of the expression?';

const ops = ['+', '-', '*'];

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const makeQuestion = () => {
  const a = randInt(MIN_NUMBER, MAX_NUMBER);
  const b = randInt(MIN_NUMBER, MAX_NUMBER);
  const op = ops[randInt(0, 3)];
  const question = `${a} ${op} ${b}`;
  let correctAnswer;
  switch (op) {
    case '+': correctAnswer = a + b; break;
    case '-': correctAnswer = a - b; break;
    case '*': correctAnswer = a * b; break;
    default: break;
  }
  correctAnswer = correctAnswer.toString();
  return { question, correctAnswer };
};

export { taskDescription, makeQuestion };
