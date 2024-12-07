const cardPack = [
    { name: 'Pikachu', healthPoints: 60, imageUrl: 'path_to_image/pikachu.png' },
    { name: 'Bulbasaur', healthPoints: 50, imageUrl: 'path_to_image/bulbasaur.png' },
    // Add more cards...
];

document.getElementById('buyPack').addEventListener('click', () => {
    const newCards = buyCardPack();
    displayCards(newCards);
});

function buyCardPack() {
    const selectedCards = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * cardPack.length);
        selectedCards.push(cardPack[randomIndex]);
    }
    return selectedCards;
}

function displayCards(cards) {
    const cardDisplay = document.getElementById('cardDisplay');
    cardDisplay.innerHTML = ''; // Clear previous cards
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.imageUrl}" alt="${card.name}">
            <h3>${card.name}</h3>
            <p>HP: ${card.healthPoints}</p>
        `;
        cardDisplay.appendChild(cardElement);
    });
}
