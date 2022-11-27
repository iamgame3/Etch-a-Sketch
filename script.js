
const grid = document.querySelector('.grid');
const square = document.createElement('div');
square.classList.add('square');
const button = document.querySelector('.change');

let makeGrid = (a) => {
    grid.replaceChildren();
    let totalSquares = a * a;
    let length = (800/a) - 2;
    for (i = 0; i < totalSquares; i++) {
        square.style.cssText += `width: ${length}px; height: ${length}px;`;
        grid.appendChild(square.cloneNode(true));
    }
}

makeGrid(16);

let squares = document.querySelectorAll('.square')
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.cssText += "background-color: black;";
}));

let makeGridFromInput = () => {
    let input = prompt("Enter preferred width (width and height are equal, and max width is 100).")
    if (input > 100) {
        alert("Error, max width is 100.");
        return;
    }
    makeGrid(input);
    let squares = document.querySelectorAll('.square')
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.style.cssText += "background-color: black;";
    }));
};

button.addEventListener('click', makeGridFromInput);