// Task 1 Declare two variables, num1 and num2, and assign them numeric values. Calculate the
// sum, difference, product, and quotient of these two numbers. Display the results on the console.
let num1 = 8;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Task 2 Create an array of numbers. Write a loop to find and display the largest number in the
// array. Additionally, write another loop to calculate the sum of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5];
let largest = 0;

numbers.forEach((num) => {
  if (num > largest) {
    largest = num;
  }
  console.log(largest);
});

// let counter = 0;
// for (let i = 0; i < arrayNum.length; i++) {
//   console.log("The largest number in the array is", i);
//   counter = counter + arrayNum[i];
// }

// Task 3 Write a JavaScript function named calculateArea that takes two parameters, length and
// width, and returns the area of a rectangle. Call this function with different sets of length and
// width values to calculate and display the areas.

function calculateArea(length, width) {
  return length + width;
}

console.log(calculateArea(3, 4));
console.log(calculateArea(4, 8));

// Task 4 Create a program that asks the user to enter their age. Using conditional statements,
// check if the age is greater than or equal to 18. If it is, display a message saying "You are an
// adult," otherwise, display "You are a minor."
const age = 22;

if (age > 18 || age == 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Task 5 Build an HTML page with a button and an empty paragraph element. Using JavaScript,
// add an event listener to the button so that when it is clicked, the paragraph element displays the
// text "Hello, World!" Then, add another button that, when clicked, clears the text from the
// paragraph.
const showText = document.querySelector(button);

document.querySelector(button).addEventlistener("click", showParagraph);

function showParagraph() {
  showText.classList.toggle("Hello, World!");
}
