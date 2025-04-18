let rollDicebtn = document.getElementById("rollDice");

let player1Score = 0;
let player2Score = 0;

let player1ScoreDisplay = document.querySelector(".scoreP1");
let player2ScoreDisplay = document.querySelector(".scoreP2");

let player1DiceImg = document.getElementById("diceImgP1");
let player2DiceImg = document.getElementById("diceImgP2");

let player1Name = document.getElementById("p1Tag");
let player2Name = document.getElementById("p2Tag");

let scoreNameTagP1 = document.getElementById("scoreNameP1");
let scoreNameTagP2 = document.getElementById("scoreNameP2");

let p1GameWin = document.querySelector(".Player-1-win");
let p2GameWin = document.querySelector(".Player-2-win");

let gameTie = document.querySelector(".tie-game");

let startButton = document.querySelector(".start-button");

let isPlayer1Turn = true;
let player1Roll = 0;
let player2Roll = 0;

player1Name.addEventListener("input", function () {
  scoreNameTagP1.textContent = player1Name.innerText;
});

player2Name.addEventListener("input", function () {
  scoreNameTagP2.textContent = player2Name.innerText;
});

startButton.addEventListener("click", function () {
  player1Score = 0;
  player2Score = 0;
  player1ScoreDisplay.textContent = player1Score;
  player2ScoreDisplay.textContent = player2Score;

  player1DiceImg.style.display = "none";
  player2DiceImg.style.display = "none";

  isPlayer1Turn = true;
  player1Roll = 0;
  player2Roll = 0;

  document.querySelector(".start-div").style.display = "none";
  document.querySelector(".tint").style.display = "none";
});

rollDicebtn.addEventListener("click", function (event) {
  if (isPlayer1Turn) {
    rollDicebtn.innerHTML = "Roll Dice for Player 1";

    player1Roll = Math.floor(Math.random() * 6) + 1;
    console.log("Player 1 rolled: " + player1Roll);

    player1DiceImg.style.display = "block";
    player1DiceImg.src = getDiceImage(player1Roll);
    isPlayer1Turn = false;
  } else {
    rollDicebtn.innerHTML = "Roll Dice for Player 1";

    player2Roll = Math.floor(Math.random() * 6) + 1;
    console.log("Player 2 rolled: " + player2Roll);

    player2DiceImg.style.display = "block";
    player2DiceImg.src = getDiceImage(player2Roll);
    setTimeout(() => {
      checkWinner();
    }, 2000);
  }
});

function getDiceImage(roll) {
  return `./assets/dice${roll}.png`;
}

function checkWinner() {
  if (player1Roll !== 0 && player2Roll !== 0) {
    if (player1Roll > player2Roll) {
      player1Score++;
      p1GameWin.style.display = "block";
      setTimeout(() => {
        resetGame();
      }, 2000);
    } else if (player2Roll > player1Roll) {
      player2Score++;
      p2GameWin.style.display = "block";
      setTimeout(() => {
        resetGame();
      }, 2000);
    } else {
      gameTie.style.display = "block";
      setTimeout(() => {
        resetGame();
      }, 2000);
    }
  }

  player1ScoreDisplay.textContent = player1Score;
  player2ScoreDisplay.textContent = player2Score;
}

function resetGame() {
  player1Roll = 0;
  player2Roll = 0;

  player1DiceImg.style.display = "none";
  player2DiceImg.style.display = "none";

  p1GameWin.style.display = "none";
  p2GameWin.style.display = "none";
  gameTie.style.display = "none";

  isPlayer1Turn = true;
}
