const cards = [
    { name: 'Pikachu', hp: 50, image: 'pikachu.png', back: 'card_back.png', code: '001' },
    { name: 'Bulbasaur', hp: 60, image: 'bulbasaur.png', back: 'card_back.png', code: '002' },
    // Add more cards as needed
];

const deck = [];
const packSize = 10;

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function buyPack() {
    const pack = [];
    for (let i = 0; i < packSize; i++) {
        pack.push(drawCard());
    }
    displayPack(pack);
}

function displayPack(pack) {
    const packContainer = document.querySelector('.pack-container');
    packContainer.innerHTML = ''; // Clear previous packs
    pack.forEach(card => {
        const cardElement = createCardElement(card);
        packContainer.appendChild(cardElement);
    });
}

function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
        <img src="${card.image}" alt="${card.name}">
        <div>${card.name} - HP: ${card.hp}</div>
    `;
    return cardDiv;
}

document.getElementById('buyPack').addEventListener('click', buyPack);
const validCharacters = /^[A-Z0-9]+$/; // Regex to allow only uppercase letters and digits

function validateCode(code) {
    if (code.length !== 13) {
        return 'Code must be exactly 13 characters long.';
    }
    if (!validCharacters.test(code)) {
        return 'Code can only contain uppercase letters and numbers.';
    }
    // If the code is valid, you can perform additional actions here (e.g., redeeming a pack)
    return 'Code is valid! You can redeem your pack now.';
}

document.getElementById('validateCode').addEventListener('click', function() {
    const codeInput = document.getElementById('codeInput').value.trim().toUpperCase();
    const message = validateCode(codeInput);
    document.getElementById('codeMessage').innerText = message;
});
