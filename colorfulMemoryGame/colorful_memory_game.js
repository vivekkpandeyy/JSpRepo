const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'teal'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;
let canClick = true;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    gameContainer.innerHTML = '';
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    if (!canClick) return;
    
    const card = event.target.closest('.card');
    if (!card || card.classList.contains('matched') || card.classList.contains('flipped')) {
        return;
    }
    
    card.style.backgroundColor = card.dataset.color;
    card.textContent = card.dataset.color;
    card.classList.add('flipped');
    selectedCards.push(card);
    
    if (selectedCards.length === 2) {
        canClick = false;
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
    } else {
        setTimeout(() => {
            card1.style.backgroundColor = '#ddd';
            card1.textContent = '';
            card1.classList.remove('flipped');
            
            card2.style.backgroundColor = '#ddd';
            card2.textContent = '';
            card2.classList.remove('flipped');
        }, 500);
    }
    
    selectedCards = [];
    canClick = true;
}

function startGame() {
    clearInterval(gameInterval);
    timeLeft = 30;
    startbtn.disabled = true;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    timerElement.textContent = `Time Left: ${timeLeft}`;
    
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    generateCards();
    
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            canClick = false;
            setTimeout(() => {
                alert(`Game Over! Your score: ${score}`);
                startbtn.disabled = false;
            }, 300);
        }
    }, 1000);
    
    canClick = true;
}

startbtn.addEventListener('click', startGame);
gameContainer.addEventListener('click', handleCardClick);