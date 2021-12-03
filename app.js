// import functions and grab DOM elements
import { createCountString } from './utils.js';

const skylineDropdown = document.getElementById('skyline-dropdown');
const waterfrontDropdown = document.getElementById('waterfront-dropdown');
const castleDropdown = document.getElementById('castle-dropdown');

const skylineImg = document.getElementById('skyline-img');
const waterfrontImg = document.getElementById('waterfront-img');
const castleImg = document.getElementById('castle-img');

const changesCount = document.getElementById('changes-count');

const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');
const sloganOutput = document.getElementById('slogan-output');

const nameButton = document.getElementById('name-button');
const nameInput = document.getElementById('name-input');

const sloganArray = [];
// let state

let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;





// set event listeners 
skylineDropdown.addEventListener('change', () => {
    const select = skylineDropdown.value;

    skylineImg.src = `./assets/city-${select}.png`;

    skylineCount++;

    displayStats();

});

waterfrontDropdown.addEventListener('change', () => {
    const select = waterfrontDropdown.value;

    waterfrontImg.src = `./assets/water-${select}.png`;

    waterfrontCount++;

    displayStats();

});

castleDropdown.addEventListener('change', () => {
    const select = castleDropdown.value;

    castleImg.src = `./assets/castle-${select}.png`;

    castleCount++;

    displayStats();

});

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInput.value;

    sloganArray.push(newSlogan);

    sloganInput.value = '';

    displaySlogans();
});

function displayStats() {
    const countString = createCountString(skylineCount, waterfrontCount, castleCount);
    changesCount.textContent = countString; 
}

function displaySlogans() {
    sloganOutput.textContent = '';

    for (let slogan of sloganArray) {
        const p = document.createElement('p');
        p.textContent = slogan;
        sloganOutput.append(p);}
}
