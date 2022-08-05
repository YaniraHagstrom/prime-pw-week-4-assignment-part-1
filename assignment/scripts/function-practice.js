console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('Question 1:');

function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('Question 2:');

function helloName( name ) {
  console.log('Hello,', name, '!');
  return;
}
// Remember to call the function to test
helloName('Yani');


// 3. Function to add two numbers together & return the result
console.log('Question 3:');

function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  console.log('adding', firstNumber, 'and', secondNumber, 'equals', answer);
  // return firstNumber + secondNumber;
  return answer;
}

addNumbers( 9, 7);
addNumbers(100, 450);
addNumbers(-2, 10);


// 4. Function to multiply three numbers & return the result
console.log('Question 4:');

function multiplyThree(num1, num2, num3 ){
  let product = num1 * num2 * num3;
  console.log('multiplying', num1,',', num2, '&', num3, 'equals', product);
  return product;
}

console.log(multiplyThree(2,3,5));
console.log(multiplyThree(9,5,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('Question 5:');

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive  (-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('Question 6:');

function getLast( array ) {
  if ( array.length > 0){
    console.log('the arrays length is', array.length);
    let lastItem = array.length - 1;
    return array[lastItem];
  }
  return 'undefined';

}

console.log(getLast([1, 2, 3, 6]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('Question 7:');

function find( value, array ){
  for ( let i = 0; i < array.length; i ++){
    // console.log('index',i);
    // console.log('the value I am looking for is', value);
    // console.log('this array item is', array[i]);
    if ( value === array[i]){
      // console.log('this value is in the array');
      return true;
    }
  }
  // console.log('the value is not in the array')
  return false;
}

console.log('this should return true',find(1, [2, 5, 7, 4 ,1]));
console.log('this should return false',find(1, [2, 5, 7, 4 ,7]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('Question 8:');

function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
console.log('Question 9:');

function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('Question 10:');




// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log('Question 11:');
