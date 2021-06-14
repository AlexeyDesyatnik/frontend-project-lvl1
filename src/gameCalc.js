import randInt from './randInt.js';

const taskDescription = 'What is the result of the expression?';

const ops = ['+', '-', '*'];

const makeQuestion = () => {
  const a = randInt(0, 100);
  const b = randInt(0, 100);
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
