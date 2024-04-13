import logicOfGame from '../src/index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const calcGcd = (num1, num2) => {
  const minValue = Math.min(num1, num2);
  let gcd = 1;
  for (let i = 1; i <= minValue; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      gcd = i;
    }
  }
  return gcd;
};

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(10) + 1;
  const secondNumber = getRandomNumber(10) + 1;

  const question = `${firstNumber} ${secondNumber}`;
  const result = calcGcd(firstNumber, secondNumber).toString();

  return [question, result];
};

const playGameGcd = () => {
  const taskOfGame = 'Find the greatest common divisor of given numbers.';
  logicOfGame(taskOfGame, generateQuestionAndAnswer);
};
export default playGameGcd;
