// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

// const gameBoard = (() => {
//     const b = "";
//     let gameBoard = [b,b,b,b,b,b,b,b,b];

//     return {
//         gameBoard,
//     };
// })();

// const gameFlow = (() => {
//     let gameBoard = [b,b,b,b,b,b,b,b,b];

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

const columns = document.getElementsByClassName("col");

Array.from(columns).forEach(element => {
    element.addEventListener("click", clickOO);
});

let playerSymbol = "X";

function clickOO() {
    console.log("Running clickOO");
    console.log(this.textContent);

    if (!this.textContent.includes("X") && !this.textContent.includes("O") && playerSymbol == "X") {
        this.textContent = playerSymbol;
        playerSymbol = "O";
    }
    else if (!this.textContent.includes("X") && !this.textContent.includes("O") && playerSymbol == "O") {
        this.textContent = playerSymbol;
        playerSymbol = "X";
    }

    // if (this.textContent.includes("X")) {
    //     this.textContent = playerSymbol;
    // }
    // else if (this.textContent.includes("O")) {
    //     this.textContent = playerSymbol;
    // }
    
}

