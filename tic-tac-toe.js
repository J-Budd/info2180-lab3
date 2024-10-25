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
]

//Ex 1
document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll("#board div");
    square.forEach(square => square.classList.add('square'));
    square.forEach(square => square.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
    }));
    square.forEach(square => square.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hover');
    }));
    square.forEach(square => square.addEventListener('click', squareClicked));
});



//Ex 2
function squareClicked(e){
    const starget = e.target;

    if (starget.innerHTML != ""){
        return;
    }

    if (player == 'X'){
        starget.classList.add("X");
        starget.innerHTML = "X";
        player = 'O';
    } else {
        starget.classList.add('O');
        starget.innerHTML = "O";
        player = 'X';
    }

    checkWinner();
}


//Ex 4
function checkWinner(){

}
