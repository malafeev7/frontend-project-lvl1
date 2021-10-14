import getRandomNumber from '../random-number.js';
import startGame from '../index.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i ** 2 <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const isText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataGame = () => {
  const question = getRandomNumber(2, 100);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(question), trueAnswer];
};

const startBrainPrimeGames = () => startGame(isText, getDataGame);

export default startBrainPrimeGames;
