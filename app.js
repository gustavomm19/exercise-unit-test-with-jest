// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDolarIs = {
    "JPY": 130.10, // japan yen
    "EUR": 1.2, // euro
    "GBP": 0.8, // british pound
}

let oneYenIs = {
    "JPY": 127.9, // japan yen
    "EUR": 1.2, // euro
    "GBP": 0.0062, // british pound
}

const fromEuroToDollar = (ammount) => {
    return oneEuroIs.USD * ammount;
}

const fromDollarToYen = (ammount) => {
    return oneDolarIs.JPY * ammount;
}

const fromYenToPound = (ammount) => {
    return oneYenIs.GBP * ammount;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };