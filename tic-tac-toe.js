"use strict";

//initialises board
document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll("#board div");
    square.forEach(square => square.classList.add('square'));
    square.forEach(square => square.addEventListener('click', squareClicked));
});

let player = 'X';
let played = [];

function squareClicked(e){
    const starget = e.target;

    if (starget.innerHTML != ""){
        return;
    }

    if (player == 'X'){
        starget.classList.add("X");
        starget.innerHTML = "X";
        player = 'O';
        alert("Index: ", starget);
    } else {
        starget.classList.add('O');
        starget.innerHTML = "O";
        player = 'X';
    }
}
