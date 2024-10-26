const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choice");
let player;
let computer;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Scissors";
            break;
        case 3:
            computer = "Paper";
            break;
    }
}

function checkWinner() {
    if (player === computer){
        return "Draw"
    }else if (computer === "Rock"){
        return (player === "Paper") ? "You win!" : "You lose!";
    }else if (computer === "Scissors"){
        return (player === "Rock") ? "You win!" : "You lose!";
    }else if (computer === "Paper"){
        return (player === "Scissors") ? "You win!" : "You lose!";
    }
}