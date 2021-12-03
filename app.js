// import functions and grab DOM elements

const skylineDropdown = document.getElementById('skyline-dropdown');
const waterfrontDropdown = document.getElementById('waterfront-dropdown');
const castleDropdown = document.getElementById('castle-dropdown');

const skylineImg = document.getElementById('skyline-img');
const waterfrontImg = document.getElementById('waterfront-img');
const castleImg = document.getElementById('castle-img');



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

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
