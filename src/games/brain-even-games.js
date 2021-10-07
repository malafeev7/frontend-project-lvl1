import getRandomNumber from '../random-number.js';
import startGame from '../main.js';

const isEven = (n) => n % 2 === 0;

const isText = 'Answer "yes" if the number is even, otherwise answer "no"';

const getDataGame = () => {
  const question = getRandomNumber(1, 100);
  const trueAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), trueAnswer];
};

const startBrainEvenGames = () => startGame(isText, getDataGame);

export default startBrainEvenGames;
