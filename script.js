const cards = [
    { name: 'Pikachu', hp: 50, image: 'https://pkmncards.com/wp-content/uploads/alakazam-base-set-bs-1.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '001' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/blastoise-base-set-bs-2-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/chansey-base-set-bs-3-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/charizard-base-set-bs-4-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/clefairy-base-set-bs-5-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/gyarados-base-set-bs-6-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/hitmonchan-base-set-bs-7-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/machamp-base-set-bs-8-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/magneton-base-set-bs-9-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/mewtwo-base-set-bs-10-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/nidoking-base-set-bs-11-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
    { name: 'Bulbasaur', hp: 60, image: 'https://pkmncards.com/wp-content/uploads/ninetales-base-set-bs-12-325x447.jpg', back: 'https://th.bing.com/th/id/R.822be1519b67a0f657dbfeae47eba30b?rik=HVdbyVLgYp%2fEKA&pid=ImgRaw&r=0', code: '002' },
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
const opponents = [
    { id: 1, name: 'Gary Oak', level: 5 },
    { id: 2, name: 'Misty', level: 7 },
    { id: 3, name: 'Brock', level: 8 },
];

function battle(opponent) {
    const playerLevel = 6; // Example player level, can be retrieved from the player's data
    let resultMessage;

    if (playerLevel >= opponent.level) {
        resultMessage = `You defeated ${opponent.name}! You earned 100 coins!`;
        // You can add code here to increase player coins/rewards
    } else {
        resultMessage = `You lost to ${opponent.name}. Better luck next time!`;
    }

    displayResult(resultMessage);
}

function displayResult(message) {
    const battleResult = document.getElementById('battleResult');
    battleResult.innerText = message;
    battleResult.classList.remove('hidden');
}

document.querySelectorAll('.battle-button').forEach(button => {
    button.addEventListener('click', function() {
        const opponentId = this.parentElement.dataset.opponentId;
        const opponent = opponents.find(op => op.id == opponentId);
        battle(opponent);
    });
});
