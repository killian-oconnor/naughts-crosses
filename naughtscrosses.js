// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

// const gameBoard = (() => {
//     const b = "";
//     let gameBoard = ["b","b","b","b","b","b","b","b","b"];

//     return {
//         gameBoard,
//     };
// })();

// const gameFlow = (() => {
//     let gameBoard = ["b","b","b","b","b","b","b","b","b"];

//     return {
//         gameBoard,
//     };
// })();

// const Player = (name) => {
//     const sayName = () => console.log(`my name is ${name}`)
//     return {sayName}
// }

// document.getElementById("box1").addEventListener("click", clickO);


// function clickO() {
//     console.log("Running clickO");
//     console.log(document.getElementById("box1").textContent);
    

//     if (document.getElementById("box1").textContent.includes("X")) {
//         document.getElementById("box1").textContent = "O";
//     }
//     else if (document.getElementById("box1").textContent.includes("O")) {
//         document.getElementById("box1").textContent = "X";
//     }
    
// }

let gameBoard = ["b","b","b","b","b","b","b","b","b"];

const columns = document.getElementsByClassName("col");

Array.from(columns).forEach(element => {
    element.addEventListener("click", clickOO);
});

let playerSymbol = "X";
updatePlayer();

function clickOO() {
    console.log("Running clickOO");
    console.log(this.textContent);
    console.log(this.getAttribute('value'));
    let selectedBox = this.getAttribute('value');

    if (!this.textContent.includes("X") && !this.textContent.includes("O") && playerSymbol == "X") {
        this.textContent = playerSymbol;
        gameBoard[selectedBox] = playerSymbol;
        console.log(gameBoard);
        playerSymbol = "O";
    }
    else if (!this.textContent.includes("X") && !this.textContent.includes("O") && playerSymbol == "O") {
        this.textContent = playerSymbol;
        gameBoard[selectedBox] = playerSymbol;
        console.log(gameBoard);
        playerSymbol = "X";
    }
    checkWinner();
    updatePlayer();
    

    // if (this.textContent.includes("X")) {
    //     this.textContent = playerSymbol;
    // }
    // else if (this.textContent.includes("O")) {
    //     this.textContent = playerSymbol;
    // }
    
}

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", resetBoard);

function resetBoard(){
    Array.from(columns).forEach(element => {
        element.textContent = ""
    });
    gameBoard = ["b","b","b","b","b","b","b","b","b"];
    playerSymbol = "X"
    updatePlayer();
}

function updatePlayer() {
    document.getElementById("currentPlay").innerHTML = "";
    const currentPlayer = document.createElement('H1');
    currentPlayer.textContent = ("Player " + playerSymbol);

    document.getElementById("currentPlay").appendChild(currentPlayer);
}
function checkWinner() {

let winningRow1 = gameBoard[0] + gameBoard[1] + gameBoard[2];
let winningRow2 = gameBoard[3] + gameBoard[4] + gameBoard[5];
let winningRow3 = gameBoard[6] + gameBoard[7] + gameBoard[8];
let winningRow4 = gameBoard[0] + gameBoard[3] + gameBoard[6];
let winningRow5 = gameBoard[1] + gameBoard[4] + gameBoard[7];
let winningRow6 = gameBoard[2] + gameBoard[5] + gameBoard[8];
let winningRow7 = gameBoard[0] + gameBoard[4] + gameBoard[8];
let winningRow8 = gameBoard[2] + gameBoard[4] + gameBoard[6];

if (winningRow1 == "XXX" || winningRow2 == "XXX"  || winningRow3 == "XXX" || winningRow4 == "XXX" || winningRow5 == "XXX" || winningRow6 == "XXX" || winningRow7 == "XXX" || winningRow8 == "XXX" ) {
    alert("Player X wins!")
    resetBoard();
}

else if (winningRow1 == "OOO" || winningRow2 == "OOO"  || winningRow3 == "OOO" || winningRow4 == "OOO" || winningRow5 == "OOO" || winningRow6 == "OOO" || winningRow7 == "OOO" || winningRow8 == "OOO" ) {
    alert("Player O wins!")
    resetBoard();
}

}

