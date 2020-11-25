const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const intro = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      intro.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const whoWins = function (player, computer) {
    const result = document.querySelector(".winner");
    const pScore = document.querySelector(".player-score h3");
    const cScore = document.querySelector(".computer-score h3");
    console.log(`${player} ${computer}`);
    if (player === computer) {
      result.textContent = "Tie";
    } else if ((player + 1) % 3 == computer) {
      result.textContent = "You lose :(";
      computerScore++;
      cScore.textContent = computerScore;
    } else {
      result.textContent = "Winner :)";
      playerScore++;
      pScore.textContent = playerScore;
    }
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".buttons button");
    const pImage = document.querySelector(".player-hand");
    const cImage = document.querySelector(".computer-hand");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const playerPlay = this.textContent;
        pImage.src = "assets/rock.png";
        cImage.src = "assets/rock.png";
        pImage.classList.remove("shakePlayer");
        cImage.classList.remove("shakeComputer");
        void cImage.offsetWidth;
        void pImage.offsetWidth;
        cImage.classList.add("shakeComputer");
        pImage.classList.add("shakePlayer");
        setTimeout(function () {
          const randomNumber = Math.floor(Math.random() * 3);
          const helpArray = ["rock", "paper", "scissors"];
          pImage.src = "assets/" + playerPlay + ".png";
          cImage.src = "assets/" + helpArray[randomNumber] + ".png";
          whoWins(helpArray.indexOf(playerPlay), randomNumber);
        }, 500);
      });
    });
  };

  startGame();
  playMatch();
};

game();
