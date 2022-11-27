// make a function that creates a 16x16 (will be changed later) grid of squares
//     16 divs of equal width (900px/16) and of height equal to width
//     15 divs of the same size under those divs
const grid = document.querySelector('.grid');
const square = document.createElement('div');

let makeGrid = (a) => {
    if (a > 100) return;
    let totalSquares = a * a;
    for (i = 0; i <= totalSquares; i++)
        grid.appendChild(square);
}