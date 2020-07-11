document.getElementById("hit-button").addEventListener("click", userHit);
document.getElementById("stand-button").addEventListener("click", userStand);
document.getElementById("deal-button").addEventListener("click", userDeal);

let gameData = {
  user: {
    table: "user-playing-table",
    pointsCounter: "user-points",
    score: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    winsCell: "user-wins",
    lossesCell: "user-losses",
    drawsCell: "user-draws",
  },
  dealer: {
    table: "dealer-playing-table",
    pointsCounter: "dealer-points",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
};

const USER = gameData.user;
const DEALER = gameData.dealer;

let gameDoneStatus = false;

function userHit() {
  populateCard(USER);
}

function populateCard(ACTIVEPLAYER) {
  let cardImage = document.createElement("img");
  let randomCard = gameData.cards[
    Math.floor(Math.random() * gameData.cards.length)
  ].toString();
  cardImage.src = `images/${randomCard}.png`;
  let userFlexBox = document.getElementById(ACTIVEPLAYER.table);
  userFlexBox.appendChild(cardImage);
  computeScore(randomCard, ACTIVEPLAYER);
}

function computeScore(hitCard, ACTIVEPLAYER) {
  if (hitCard === "J" || hitCard === "Q" || hitCard === "K") {
    ACTIVEPLAYER.score += 10;
  } else if (hitCard === "A") {
    if (ACTIVEPLAYER.score + 11 <= 21) {
      ACTIVEPLAYER.score += 11;
    } else {
      ACTIVEPLAYER.score += 1;
    }
  } else {
    ACTIVEPLAYER.score += parseInt(hitCard);
  }
  document.getElementById(
    ACTIVEPLAYER.pointsCounter
  ).textContent = ACTIVEPLAYER.score.toString();
}

function userStand() {
  dealerMove();
  decideWinner();
}

function dealerMove() {
  while (
    DEALER.score < 16 ||
    (DEALER.score >= 16 && USER.score <= 21 && USER.score >= DEALER.score)
  ) {
    populateCard(DEALER);
  }
}

function decideWinner() {
  if (USER.score > DEALER.score && USER.score <= 21) {
    gameData.user.wins += 1;
    document.getElementById(
      gameData.user.winsCell
    ).textContent = gameData.user.wins.toString();
  } else if (USER.score < DEALER.score && DEALER.score <= 21) {
    gameData.user.losses += 1;
    document.getElementById(
      gameData.user.lossesCell
    ).textContent = gameData.user.losses.toString();
  } else {
    gameData.user.draws += 1;
    document.getElementById(
      gameData.user.winsCell
    ).textContent = gameData.user.draws.toString();
  }
  //Message to say you won/lost/drew
  gameDoneStatus = true;
}

function userDeal() {}
