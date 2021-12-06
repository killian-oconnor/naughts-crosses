// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

const gameBoardMod = (() => {
    
    // setup initial gameBoard with b to represent blanks
    let gameBoard = ["b","b","b","b","b","b","b","b","b"];

    // function to handle player clicking a gameboard square
    function clickSquare() {
        console.log("Running clickSquare");
        console.log(this.textContent);
        console.log(this.getAttribute('value'));
        let selectedBox = this.getAttribute('value');

        if (!this.textContent.includes("X") && !this.textContent.includes("O") && gameFlow.playerSymbol == "X") {
            this.textContent = gameFlow.playerSymbol;
            gameBoard[selectedBox] = gameFlow.playerSymbol;
            console.log(gameBoard);
            gameFlow.playerSymbol = "O";
        }
        else if (!this.textContent.includes("X") && !this.textContent.includes("O") && gameFlow.playerSymbol == "O") {
            this.textContent = gameFlow.playerSymbol;
            gameBoard[selectedBox] = gameFlow.playerSymbol;
            console.log(gameBoard);
            gameFlow.playerSymbol = "X";
        }
        gameFlow.checkWinner(gameBoard);
        gameFlow.updatePlayer(gameFlow.playerSymbol);
        
    }

    // assign event listener to reset button
    const resetButton = document.getElementById("resetBtn");
    resetButton.addEventListener("click", resetBoard);

    // function to reset the gameboard and setup a fresh game
    function resetBoard(){
        // create an array from the columns object and loop through them to remove the Xs and Os
        Array.from(columns).forEach(element => {
            element.textContent = ""
        });
        gameBoard = ["b","b","b","b","b","b","b","b","b"];
        gameFlow.playerSymbol = "X"
        playerSymbol = gameFlow.playerSymbol;
        gameFlow.updatePlayer(playerSymbol);
        return gameBoard;
    }

    // object to hold columns from webpage. all columns on page are gameboard squares
    const columns = document.getElementsByClassName("col");

    // add eventlisteners for clicking each gameboard square
    Array.from(columns).forEach(element => {
        element.addEventListener("click", clickSquare);
    });


    return {
        gameBoard,
        clickSquare,
        resetBoard
    };
})();

const gameFlow = (() => {
    
    // function to update the current player turn
    function updatePlayer(playerSymbol) {
        document.getElementById("currentPlay").innerHTML = "";
        const currentPlayer = document.createElement('H1');
        currentPlayer.textContent = ("Player " + playerSymbol + "'s turn");

        document.getElementById("currentPlay").appendChild(currentPlayer);
    }

    // function to check if a winning row has been hit. If so display winner message and reset game
    function checkWinner(gameBoard) {

            // variables to identify winning rows
        let winningRow1 = gameBoard[0] + gameBoard[1] + gameBoard[2];
        let winningRow2 = gameBoard[3] + gameBoard[4] + gameBoard[5];
        let winningRow3 = gameBoard[6] + gameBoard[7] + gameBoard[8];
        let winningRow4 = gameBoard[0] + gameBoard[3] + gameBoard[6];
        let winningRow5 = gameBoard[1] + gameBoard[4] + gameBoard[7];
        let winningRow6 = gameBoard[2] + gameBoard[5] + gameBoard[8];
        let winningRow7 = gameBoard[0] + gameBoard[4] + gameBoard[8];
        let winningRow8 = gameBoard[2] + gameBoard[4] + gameBoard[6];

        console.log("checkwinner function gameboard = " + gameBoard);

        // check if player X has hit any winning rows
        if (winningRow1 == "XXX" || winningRow2 == "XXX"  || winningRow3 == "XXX" || winningRow4 == "XXX" || winningRow5 == "XXX" || winningRow6 == "XXX" || winningRow7 == "XXX" || winningRow8 == "XXX" ) {
            alert("Player X wins!")
            gameBoardMod.resetBoard(); 
        }

        // check if player O has hit any winning rows
        else if (winningRow1 == "OOO" || winningRow2 == "OOO"  || winningRow3 == "OOO" || winningRow4 == "OOO" || winningRow5 == "OOO" || winningRow6 == "OOO" || winningRow7 == "OOO" || winningRow8 == "OOO" ) {
            alert("Player O wins!")
            gameBoardMod.resetBoard();
        }

    }

    


    // set initial player turn
    let playerSymbol = "X";

    // ######## DONT THINK I SHOULD BE RUNNING A FUNCTION INSIDE A MODULE
    updatePlayer(playerSymbol);

    return {
        updatePlayer,
        checkWinner,
        playerSymbol
    };
})();

const Player = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return {sayName}
}









