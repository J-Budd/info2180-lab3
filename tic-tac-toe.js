"use strict";
let player = 'X';
const winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]   
];

//Ex 1
document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll("#board div");
    square.forEach(square => square.classList.add('square'));
    //Ex 3
    square.forEach(square => square.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
    }));
    square.forEach(square => square.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hover');
    }));
    //
    square.forEach(square => square.addEventListener('click', squareClicked));
    let reset = document.querySelector("button");
    reset.addEventListener('click', resetGame);
});



function getSquaresList(){
    let squaresList = document.querySelectorAll('div.square');
    return squaresList;
}

//Ex 2
function squareClicked(e){
    const starget = e.target;
    
    //Ex6
    if (starget.innerHTML != ""){
        return;
    }
    //
    if (player == 'X'){
        starget.classList.add("X");
        starget.innerHTML = "X";
        player = 'O';
    } else {
        starget.classList.add('O');
        starget.innerHTML = "O";
        player = 'X';
    }

    let squares = Array.from(getSquaresList());
    checkWinner(squares);
}


//Ex 4
function checkWinner(array){
    for (let condition of winConditions) {
        let sq1 = array[condition[0]].innerHTML;
        let sq2 = array[condition[1]].innerHTML;
        let sq3 = array[condition[2]].innerHTML;

        if ((sq1 != "") && (sq2 != "") && (sq3 != "")){
            if ((sq1 == sq2) && (sq2 == sq3)){
                document.querySelector("div#status").innerHTML = ("Congratulations! " + sq1 + " is the Winner!");
                document.getElementById('status').classList.add('you-won');
                //Ex 6
                for (let sq of getSquaresList()){
                    sq.removeEventListener("click", squareClicked);
                }
                //
            }
        }
    }
}

//Ex 5
function resetGame(){
    for (let sq of getSquaresList()){
        sq.innerHTML = "";
        sq.classList.remove("X", "O");
        sq.addEventListener("click", squareClicked);
    }
    document.getElementById('status').classList.remove('you-won');
    document.getElementById('status').innerHTML = "Move your mouse over a square and click to play an X or an O.";
}