function deckBuilder() {
  const values = [
    "Charmander",
    "Charmelion",
    "Charzard",
    "Squirtle",
    "warturtle",
    "blastoise",
    "Bulbasaur",
    "ivysaur",
    "venasaur",
    "",
    "J",
    "Q",
    "K",
  ];
  const suits = ["fire", "water", "plant", "electric"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}

function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  let entity;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");
  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML = '<span class="card-value-suit top">' + cardValue + entity + "</span>" + '<span class="card-suit">' + entity + "</span>" + '<span class="card-value-suit bot">' + cardValue + entity + "</span>";
  document.body.appendChild(card);
}
const cards = deckBuilder();
randomCard(cards);
