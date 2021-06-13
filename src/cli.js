import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGame = (game) => {
  const name = greetUser();
  const result = game();
  if (result) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export { greetUser, runGame };
