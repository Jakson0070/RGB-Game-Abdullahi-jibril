let colors = [];
let correctColor;
let boxes = document.getElementById('boxes');
let colorDisplay = document.getElementById('color-display');
let message = document.getElementById('message');
let resetButton = document.getElementById('reset-button');

function generateRandomColor() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}

function generateColors() {
colors = [];
for (let i = 0; i < 8; i++) {
colors.push(generateRandomColor());
}
correctColor = colors[Math.floor(Math.random() * colors.length)];
colorDisplay.textContent = correctColor;
}

function createBoxes() {
boxes.innerHTML = '';
for (let i = 0; i < colors.length; i++) {
let box = document.createElement('div');
box.classList.add('box');
box.style.backgroundColor = colors[i];
box.addEventListener('click', checkColor);
boxes.appendChild(box);
}
}

function checkColor(e) {
let clickedColor = e.target.style.backgroundColor;
if (clickedColor === correctColor) {
message.textContent = 'Correct!';
for (let box of boxes.children) {
box.style.backgroundColor = correctColor;
}
} else {
e.target.style.backgroundColor = '#232323';
message.textContent = 'Try Again';
}
}

function resetGame() {
generateColors();
createBoxes();
message.textContent = '';
}

resetButton.addEventListener('click', resetGame);

generateColors();
createBoxes();