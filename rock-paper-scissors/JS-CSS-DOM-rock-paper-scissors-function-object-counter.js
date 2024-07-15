let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

// if (!score) {
//   score = {
//     wins: 0,
//     loses: 0,
//     ties: 0,
//   };
// }

function playGame(playerMove) {
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "you tie.";
    }
    if (computerMove === "paper") {
      result = "you lose.";
    }
    if (computerMove === "scissors") {
      result = "you win.";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "you tie.";
    }
    if (computerMove === "scissors") {
      result = "you lose.";
    }
    if (computerMove === "rock") {
      result = "you win.";
    }
  }
  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "you tie.";
    }
    if (computerMove === "paper") {
      result = "you win.";
    }
    if (computerMove === "rock") {
      result = "you lose.";
    }
  }

  if (result === "you win.") {
    score.wins++;
  }
  if (result === "you lose.") {
    score.loses++;
  }
  if (result === "you tie.") {
    score.ties++;
  }
  localStorage.setItem("score", JSON.stringify(score));

  // alert(
  //   `Your choose ${playerMove} and computer choose ${computerMove} and ${result} \n You win ${score.wins} times, you lose ${score.loses} times and you ties ${score.ties} times.`
  // );
  const resultButton = (document.querySelector(
    ".result"
  ).innerText = `${result}`);
  const moves = (document.querySelector(
    ".move"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"/>
     <img src="images/${computerMove}-emoji.png" class="move-icon"/> Computer`);

  const scores = (document.querySelector(
    ".score"
  ).innerText = `Win: ${score.wins} Lose: ${score.loses} Tie: ${score.ties}`);
}

function computerChoose() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
}
