HTML:
Three dropdowns
Why? We can tell which picture the user selected.
How?
dropdown.addEventListener('change', () => {})
dropdown.value to get the selected image
Three images
Why? To display the select image
How? myImg.src = './assets/${some-image}.jpeg'
Input
Why? User can type in a slogan
How?
const slogan = myInput.value
myArray.push(slogan)
Button
Why? Submit a slogan
How? button.addEvenListener('click', () => {})
Div for slogans
Why? A place to hold/inject slogans
Use the display a list pattern from earlier
Div for counts
Why? A place to hold how many times each dropdown was used


EVENTS:
on change of any dropdown

the corresponding image will change
get the value from the dropdown element
use that value to change the correct image tag's .src property
the count of that dropdown will increment
skylineCount++
change the DOM to update the new count on click of the button
get the slogan from the input.value
push the slogan to our array of slogans
update the DOM
clear out the old slogans from the DOM (immutable)
loop through slogan array
append each slogan