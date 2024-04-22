import logicOfGame from '../index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const playGameCalc = () => {
  const taskOfGame = 'What is the result of the expression?';
  const getRandomOperations = () => {
    const firstNumber = getRandomNumber(50);
    const secondNumber = getRandomNumber(25);
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperation = operators[randomIndex];

    const question = `${firstNumber} ${randomOperation} ${secondNumber}`;

    let result = 0;
    switch (randomOperation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      default:
        result = null;
    }
    result = result.toString();
    return [question, result];
  };

  logicOfGame(taskOfGame, getRandomOperations);
};

export default playGameCalc;
