let addShade = (a) => {
    if (a.classList.contains('shade10')) {
        a.classList.remove('shade10');
        a.classList.add('shade20');
    }   else if (a.classList.contains('shade20')) {
        a.classList.remove('shade20');
        a.classList.add('shade30');
    }   else if (a.classList.contains('shade30')) {
        a.classList.remove('shade30');
        a.classList.add('shade40');
    }   else if (a.classList.contains('shade40')) {
        a.classList.remove('shade40');
        a.classList.add('shade50');
    }   else if (a.classList.contains('shade50')) {
        a.classList.remove('shade50');
        a.classList.add('shade60');
    }   else if (a.classList.contains('shade60')) {
        a.classList.remove('shade60');
        a.classList.add('shade70');
    }   else if (a.classList.contains('shade70')) {
        a.classList.remove('shade70');
        a.classList.add('shade80');
    }   else if (a.classList.contains('shade80')) {
        a.classList.remove('shade80');
        a.classList.add('shade90');
    }   else if (a.classList.contains('shade90')) {
        a.classList.remove('shade90');
        a.classList.add('shade100');
    }   else if (a.classList.contains('shade100')) {
        return;
    }   else a.classList.add('shade10');
};

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
    addShade(square);
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
        addShade(square);
    }));
};

button.addEventListener('click', makeGridFromInput);