import logicOfGame from '../index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(10);

  const question = `${firstNumber}`;
  const result = (isPrime(firstNumber) ? 'yes' : 'no');

  return [question, result];
};

const playGamePrime = () => {
  const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  logicOfGame(taskOfGame, generateQuestionAndAnswer);
};
export default playGamePrime;
