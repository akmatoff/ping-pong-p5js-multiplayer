const teamScore1Element = document.querySelector("#teamScore1");
const teamScore2Element = document.querySelector("#teamScore2");

const menu = document.querySelector("#menu")
const joinGameButton = document.querySelector("#joinGameButton")
const newGameButton = document.querySelector("#newGameButton")

const gameCodeInput = document.querySelector("#gameCodeInput")

function updateScore() {
  teamScore1Element.innerHTML = teamScore1;
  teamScore2Element.innerHTML = teamScore1;
}

joinGameButton.addEventListener('click', joinGame)
newGameButton.addEventListener('click', newGame)