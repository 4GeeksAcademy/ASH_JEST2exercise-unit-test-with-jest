// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return Number(valueInDollar.toFixed(2));
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / oneEuroIs.USD * oneEuroIs.JPY;
    return Number(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen / oneEuroIs.JPY * oneEuroIs.GBP;
    return Number(valueInPound.toFixed(2));
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };