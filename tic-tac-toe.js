"use strict";

//initialises board
document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll("#board div");
    square.forEach(square => square.classList.add('square'));
    square.forEach(square => square.addEventListener('click', squareClicked));
    for(let count = 0; count < 9; count++){
        document.querySelector('square')[count].setAttribute('square', count);
    }
});

function squareClicked(e){
    const starget = e.target;

    if (starget.innerHTML != ""){
        return;
    }

    starget.classList.add('square.X');
    starget.innerHTML = "X";
}

