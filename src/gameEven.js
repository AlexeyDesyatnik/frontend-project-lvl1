import readlineSync from 'readline-sync';

const randInt = (from, to) => Math.floor(Math.random() * (to - from) + from);

const MAX_ATTEMPTS = 3;
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const num = randInt(MIN_NUMBER, MAX_NUMBER);
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Answer: ');
    if (answer.toLowerCase() === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
};
