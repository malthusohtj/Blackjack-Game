document.getElementById("hit-button").addEventListener("click", userHit);

let playerData = {
  user: {
    table: "user-playing-table",
    pointsCounter: "user-points",
    score: 0,
  },
  dealer: {
    table: "dealer-playing-table",
    pointsCounter: "dealer-points",
    score: 0,
  },
};

function userHit() {
  populateCard();
}

function populateCard() {
  let cardImage = document.createElement("img");
  cardImage.src = "images/5.png";
  cardImage.setAttribute("width", "30%");
  cardImage.setAttribute("height", "auto");
  cardImage.style.margin = "5px";
  let userFlexBox = document.getElementById("user-playing-table");
  userFlexBox.appendChild(cardImage);
}
