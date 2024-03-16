// HTML ELEMENTS
const counterEle = document.querySelector('#counter');
const buttonIncrementEle = document.querySelector('.button--blue');
const buttonDecrementEle = document.querySelector('.button--yellow');
const buttonResetEle = document.querySelector('.button--black');

let counter = 0;

// FUNCTIONS

const incrementCounter = () => {
    counter++;
    counterEle.textContent = counter;
}

const decrementCounter = () => {
    counter--;
    counterEle.textContent = counter;
}

const resetCounter = () => {
    counter = 0;
    counterEle.textContent = counter;
}

// EVENT LISTENERS
buttonIncrementEle.addEventListener('click', incrementCounter );
buttonDecrementEle.addEventListener('click', decrementCounter );
buttonResetEle.addEventListener('click', resetCounter );