import logicOfGame from '../index.js';

const getRandomNumber = (a, b = 0) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return min + Math.floor(Math.random() * (max - min));
};

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getGameData = () => {
  const startValue = getRandomNumber(10);
  const step = getRandomNumber(1, 10);
  const sequenceLenght = getRandomNumber(5, 10);

  const items = getProgression(startValue, step, sequenceLenght);
  const questionPosition = getRandomNumber(sequenceLenght);

  const hiddenItem = items[questionPosition];
  items[questionPosition] = '..';

  const question = `${items.join(' ')}`;
  const correctAnswer = hiddenItem.toString();

  return [question, correctAnswer];
};

const getProgressionGame = () => {
  const taskOfGame = 'What number is missing in the progression?';
  logicOfGame(taskOfGame, getGameData);
};

export default getProgressionGame;
