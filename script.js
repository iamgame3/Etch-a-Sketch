
const grid = document.querySelector('.grid');
const square = document.createElement('div');
square.classList.add('square');

let makeGrid = (a) => {
    if (a > 100) return;
    let totalSquares = a * a;
    let length = (800/a) - 2;
    for (i = 0; i < totalSquares; i++) {
        square.style.cssText += `width: ${length}px; height: ${length}px;`;
        grid.appendChild(square.cloneNode(true));
    }
}

makeGrid(8);

let squares = document.querySelectorAll('.square')
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.cssText += "background-color: black;";
}));