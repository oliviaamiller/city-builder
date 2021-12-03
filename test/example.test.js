// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createCountString } from '../utils.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('createCountString returns a string describing the current count of each piece of state supplied as an argument', (expect) => {
    const expected = `the city has changed 4 times, the waterfront has changed 5 times, the castle has changed 6 times.`;

    const actual = createCountString(4, 5, 6);

    expect.equal(actual, expected, 'returns a string with current count of image changes');



});