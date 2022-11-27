// make a function that creates a 16x16 (will be changed later) grid of squares
//     16 divs of equal width (900px/16) and of height equal to width
//     15 divs of the same size under those divs
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

makeGrid(69);