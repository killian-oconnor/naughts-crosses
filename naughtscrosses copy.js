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

// function to handle player clicking a gameboard square
function clickSquare() {
    console.log("Running clickSquare");
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
    
}


// function to reset the gameboard and setup a fresh game
function resetBoard(){
    // create an array from the columns object and loop through them to remove the Xs and Os
    Array.from(columns).forEach(element => {
        element.textContent = ""
    });
    gameBoard = ["b","b","b","b","b","b","b","b","b"];
    playerSymbol = "X"
    updatePlayer();
}

// function to update the current player turn
function updatePlayer() {
    document.getElementById("currentPlay").innerHTML = "";
    const currentPlayer = document.createElement('H1');
    currentPlayer.textContent = ("Player " + playerSymbol);

    document.getElementById("currentPlay").appendChild(currentPlayer);
}

// function to check if a winning row has been hit. If so display winner message and reset game
function checkWinner() {

    //variables to identify winning rows
    let winningRow1 = gameBoard[0] + gameBoard[1] + gameBoard[2];
    let winningRow2 = gameBoard[3] + gameBoard[4] + gameBoard[5];
    let winningRow3 = gameBoard[6] + gameBoard[7] + gameBoard[8];
    let winningRow4 = gameBoard[0] + gameBoard[3] + gameBoard[6];
    let winningRow5 = gameBoard[1] + gameBoard[4] + gameBoard[7];
    let winningRow6 = gameBoard[2] + gameBoard[5] + gameBoard[8];
    let winningRow7 = gameBoard[0] + gameBoard[4] + gameBoard[8];
    let winningRow8 = gameBoard[2] + gameBoard[4] + gameBoard[6];

    // check if player X has hit any winning rows
    if (winningRow1 == "XXX" || winningRow2 == "XXX"  || winningRow3 == "XXX" || winningRow4 == "XXX" || winningRow5 == "XXX" || winningRow6 == "XXX" || winningRow7 == "XXX" || winningRow8 == "XXX" ) {
        alert("Player X wins!")
        resetBoard();
    }

    // check if player O has hit any winning rows
    else if (winningRow1 == "OOO" || winningRow2 == "OOO"  || winningRow3 == "OOO" || winningRow4 == "OOO" || winningRow5 == "OOO" || winningRow6 == "OOO" || winningRow7 == "OOO" || winningRow8 == "OOO" ) {
        alert("Player O wins!")
        resetBoard();
    }

}

// assign event listener to reset button
const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", resetBoard);

// setup initial gameBoard with b to represent blanks
let gameBoard = ["b","b","b","b","b","b","b","b","b"];

// object to hold columns from webpage. all columns on page are gameboard squares
const columns = document.getElementsByClassName("col");

// add eventlisteners for clicking each gameboard square
Array.from(columns).forEach(element => {
    element.addEventListener("click", clickSquare);
});

// set initial player turn
let playerSymbol = "X";
updatePlayer();