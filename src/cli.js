import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const gameLoop = (makeQuestion) => {
  const MAX_ATTEMPTS = 3;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const { question, correctAnswer } = makeQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer: ');
    if (answer.toLowerCase() === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
};

const runGame = (taskDescription, makeQuestion) => {
  const name = greetUser();
  console.log(taskDescription);
  const result = gameLoop(makeQuestion);
  if (result) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export { greetUser, runGame };
