import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => Math.floor(Math.random() * 101);

const getTypeNumber = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const isEven = (num) => num % 2 === 0;
  const result = (isEven(number) ? 'yes' : 'no');
  return [question, result];
};

const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const pairOfNumbersAndResult = getTypeNumber();
    console.log(`Question: ${pairOfNumbersAndResult[0]}`);
    const answerUser = readlineSync.question('Your answer: ');
    const rightAnswer = pairOfNumbersAndResult[1];
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
