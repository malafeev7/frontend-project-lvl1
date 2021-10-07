import readlineSync from "readline-sync";

const numberOfRound = 3;

const startGame = (isText, getDataGame) => {
  console.log("Welcome to the Brain Game!");
  const userName = readlineSync.question("May I have your name?");
  console.log(`Hello, ${userName}!`);
  console.log(isText);

  for (let i = numberOfRound; i > 0; i -= 1) {
    const [question, trueAnswer] = getDataGame();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Answer: ");
    if (userAnswer !== trueAnswer) {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was '${trueAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
