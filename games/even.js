import logicOfGame from '../src/index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getTypeNumber = () => {
  const number = getRandomNumber(100);
  const question = `${number}`;
  const isEven = (num) => num % 2 === 0;
  const result = (isEven(number) ? 'yes' : 'no');
  return [question, result];
};

const playGame = () => {
  const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  logicOfGame(taskOfGame, getTypeNumber);
};

export default playGame;
