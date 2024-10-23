"use strict";

//initialises board
document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll("#board div");
    square.forEach(square => square.className = 'square');
})