const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const ourSide = document.getElementById("ourSide");
const computerSide = document.getElementById("computerSide");
const drawCounter = document.getElementById("drawCounter");
const restart = document.getElementById("restart");
let userScore = 0;
let computerScore = 0;
let itsDraw = 0;
const turn = (choice) => {
  const computerChoice = computerChoicer();
  console.log(choice, computerChoice);
  if (choice === "scissors" && computerChoice === "scissors") {
    console.log("Draw");
    itsDraw++;
  }
  if (choice === "rock" && computerChoice === "rock") {
    console.log("Draw");
    itsDraw++;
  }
  if (choice === "paper" && computerChoice === "paper") {
    console.log("Draw");
    itsDraw++;
  }
  drawCounter.innerText = itsDraw;

  if (choice === "rock" && computerChoice === "scissors") {
    console.log("user win");
    userScore++;
  } /////// rock vs scissors

  if (choice === "scissors" && computerChoice === "rock") {
    console.log("computer win");
    computerScore++;
  } //////////// scissors vs rock

  if (choice === "rock" && computerChoice === "paper") {
    console.log("computer win");
    computerScore++;
  } //////////// rock vs paper

  if (choice === "paper" && computerChoice === "rock") {
    console.log("user win");
    userScore++;
  } //////////// paper vs rock

  if (choice === "scissors" && computerChoice === "paper") {
    console.log("user win");
    userScore++;
  } //////////// scissors vs paper

  if (choice === "paper" && computerChoice === "scissors") {
    console.log("computer win");
    computerScore++;
  } //////////// scissors vs paper
  ourSide.innerText = userScore;
  computerSide.innerText = computerScore;
  if (computerScore === 5) {
    restart.style.display = "block";
    paper.disabled = true;
    rock.disabled = true;
    scissors.disabled = true;
  }
  if (userScore === 5) {
    restart.style.display = "block";
    paper.disabled = true;
    rock.disabled = true;
    scissors.disabled = true;
  }
};
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  itsDraw = 0;
  restart.style.display = "none";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  console.log(userScore);
};

const computerChoicer = () => {
  const randomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[randomChoiceIndex];

  return computerChoice;
};
