import getRandomNumber from '../random-number.js';
import startGame from '../index.js';

const progressionLength = 10;

const getProgression = (firstElement, difference, length) => {
  const iter = (currentElement, progression, index) => {
    if (index === length) {
      return progression;
    }
    progression.push(currentElement);
    return iter(currentElement + difference, progression, index + 1);
  };

  return iter(firstElement, [], 0);
};

const isText = 'What number is missing in the progression?';

const getQuestion = (progression, hiddenMemberIndex) => {
  const question = progression.slice();
  question[hiddenMemberIndex] = '..';
  return question.join(' ');
};

const getDataGame = () => {
  const firstElement = getRandomNumber(1, 50);
  const difference = getRandomNumber(1, 50);
  const progression = getProgression(
    firstElement,
    difference,
    progressionLength,
  );
  const hiddenMemberIndex = getRandomNumber(0, progression.length - 1);

  const question = getQuestion(progression, hiddenMemberIndex);
  const trueAnswer = progression[hiddenMemberIndex];

  return [question, String(trueAnswer)];
};

const startBrainProgressionGames = () => startGame(isText, getDataGame);

export default startBrainProgressionGames;
