import getRandomNumber from '../random-number.js';
import startGame from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const isText = 'Find the greatest common divisor of given numbers.';

const getDataGame = () => {
  const fNum = getRandomNumber(20, 100);
  const sNum = getRandomNumber(20, 100);

  const question = `${fNum} ${sNum}`;
  const trueAnswer = gcd(fNum, sNum);

  return [question, String(trueAnswer)];
};

const startBrainGcdGames = () => startGame(isText, getDataGame);

export default startBrainGcdGames;
