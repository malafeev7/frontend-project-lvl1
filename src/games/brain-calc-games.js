import getRandomNumber from '../random-number.js';
import startGame from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const isText = 'What is the result of the expression?';

const getDataGame = () => {
  const fNum = getRandomNumber(1, 20);
  const sNum = getRandomNumber(1, 20);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${fNum} ${operator} ${sNum}`;
  const trueAnswer = calculate(fNum, operator, sNum);

  return [question, String(trueAnswer)];
};

const startBrainCalcGames = () => startGame(isText, getDataGame);

export default startBrainCalcGames;
