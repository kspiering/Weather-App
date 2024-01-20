// Complete the following exercises using functions

/* 1
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function capitalizeWords(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Capitalize the first letter of each word
  let capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back into a string
  let result = capitalizedWords.join(" ");

  return result;
}

// Example usage:
let inputString = "the quick brown fox";
let outputString = capitalizeWords(inputString);
console.log(outputString); // Output: 'The Quick Brown Fox'

/* 2
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function findLongestWord(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Initialize a variable to store the longest word
  let longestWord = "";

  // Iterate through each word to find the longest one
  words.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

// Example usage:
let inputStrin = "Web Development Tutorial";
let longestWord = findLongestWord(inputStrin);
console.log(longestWord); // Output: 'Development'

/* 3
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function isPrime(number) {
  // Check if the number is less than 2 (not a prime number)
  if (number < 2) {
    return false;
  }

  // Check for divisibility by any number from 2 to the square root of the given number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      // If the number is divisible by any other number, it's not prime
      return false;
    }
  }

  // If no divisors were found, the number is prime
  return true;
}

// Example usage:
let num = 17; // You can change this number to test different cases
if (isPrime(num)) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}
