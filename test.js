// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

//conversion tests
test("One euro should be 1.07 dollars", function() {
     expect(fromEuroToDollar(3.5)).toBe(3.75); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.2617 yen", function() {
     expect(fromDollarToYen(5.8)).toBe(848.32);
})

test("One yen should be 0.005559105 pounds", function() {
     expect(fromYenToPound(958.2)).toBe(5.33);
})