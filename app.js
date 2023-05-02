let home = 0
let away = 0
let clickCountOne = 0
let clickCountTwo = 0
let countOne = 0
let countTwo = 0
let playerOneElem = 0
let playerTwoElem = 0


function startGame() {

  let targetOne = document.getElementById("target-one")
  let targetTwo = document.getElementById("target-two")
  let playerOneScore = document.getElementById("p-one-score")
  let playerTwoScore = document.getElementById("p-two-score")

  targetOne.classList.remove("hidden")
  targetTwo.classList.remove("hidden")
  playerOneScore.classList.remove("hidden")
  playerTwoScore.classList.remove("hidden")

}

function scorePlayerOne() {

  let playerOneElem = `${"player-one"}`

  playerOneElem.innerText = clickCountOne.toString()

  
  document.getElementById("player-one").innerText = `${clickCountOne < 10 ? clickCountOne++ : 'You Won!'}`

  document.getElementById("count-one").innerText = document.getElementById("player-one").innerText

}

function scorePlayerTwo() {

  let playerTwoElem = `${"player-two"}`

  playerTwoElem.innerText = clickCountTwo.toString()

  document.getElementById("player-two").innerText = `${clickCountTwo < 10 ? clickCountTwo++ : 'You Won!'}`

  document.getElementById("count-two").innerText = document.getElementById("player-two").innerText

}