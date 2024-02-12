let player = {
    name: "Donatus",
    chips: 123
}; 
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageElmnt = document.getElementById("message-elmnt");
let sumElmnt = document.getElementById("sum-elmnt");
let cardsElmnt = document.querySelector("#cards-elmnt");
let playerElmnt = document.getElementById("player-elmnt");

playerElmnt.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    }
    return randomNumber;
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumElmnt.textContent = "Sum: " + sum;
    cardsElmnt.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsElmnt.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageElmnt.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card; 
        cards.push(card);
    
        renderGame();
    }  
}