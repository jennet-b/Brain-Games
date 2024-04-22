// общая для всех игр логика
import readlineSync from 'readline-sync';

const logicOfGame = (taskOfGame, statement) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(taskOfGame);

  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const pairOfQuestionAndResult = statement();

    console.log(`Question: ${pairOfQuestionAndResult[0]}`);
    const answerUser = readlineSync.question('Your answer: ');

    const rightAnswer = pairOfQuestionAndResult[1];

    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default logicOfGame;
