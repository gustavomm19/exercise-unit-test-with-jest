// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dolar should be 130.10 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(3.5)

    const expected = 3.5 * 130.10; 
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); 
});

test("One yen should be 0.0217 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    const yens = fromYenToPound(3.5)

    const expected = 3.5 * 0.0062; 
    
    // this is the comparison for the unit test
     expect(yens).toBe(expected); 
});