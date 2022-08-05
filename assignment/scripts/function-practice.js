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
  return "Hello " + name;
}
// Remember to call the function to test
console.log(helloName('Yani'));


// 3. Function to add two numbers together & return the result
console.log('Question 3:');

function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return 'the sum of the first and second value is ' + answer;
}

console.log(addNumbers( 9, 7));
console.log(addNumbers(100, 450));
console.log(addNumbers(-2, 10));


// 4. Function to multiply three numbers & return the result
console.log('Question 4:');

function multiplyThree(num1, num2, num3 ){
  let product = num1 * num2 * num3;
  return 'The product of the three numbers is ' + product;
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
    let lastItem = array.length - 1;
    return 'The last item in the array is ' + array[lastItem];
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
  if ( letter === string[0]){
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
console.log('Question 9:');

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++){
    sum+= array[i];
  }
  return sum;
}

console.log('the sum of all of the items in this array is', sumAll([1, 2, 3, 4]));
console.log('the sum of all of the items in this array is', sumAll([10, 20, 2, 3, 4]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('Question 10:');

function positiveArray (array2){
  let newArray = [];
  for (let i = 0; i < array2.length; i++){
    if ( array2[i] > 0){
      newArray.push(array2[i]);
    }
  }
  return newArray;
}

console.log(positiveArray([10, -20, 2, -3, 4, 75]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log('Question 11:');

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

function whichQuarter(month){
  if ( month <= 0){
    return 'That month does not exit';
  }
  if ( month < 5){
    return 'This month is in the first quarter of the year';
  }
  else if (month > 4 && month < 9){
    return 'This month is in the second quarter of the year';
  }
  else{
    return 'This month is in the third quarter of the year';
  }
}

console.log(whichQuarter(1));
console.log(whichQuarter(5));
console.log(whichQuarter(12));
