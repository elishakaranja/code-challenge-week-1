// Author: [ELISHA DOMINIC]
// Date: [10/2023]
// Description: GRADE calculator program written in JavaScript.

// Import the 'prompt-sync' library to read user input from the console
let prompt = require('prompt-sync')();

// Prompt the user to enter their marks
let input = prompt('Enter marks: ');

// Parse the user input as a floating-point number
let enteredMarks = parseFloat(input);

// Define a function called 'calculateGrade' that takes 'ticks' (marks) as an argument
function calculateGrade(ticks) {
    // Check the range of marks and return the corresponding grade
    if (ticks >= 79 && ticks <= 100) return "A"; // If marks are between 79 and 100, return "A"
    else if (60 <= ticks && ticks < 79) return "B"; // If marks are between 60 and 78, return "B"
    else if (50 <= ticks && ticks < 60) return "C"; // If marks are between 50 and 59, return "C"
    else if (40 <= ticks && ticks < 50) return "D"; // If marks are between 40 and 49, return "D"
    else if (ticks < 40) return "E"; // If marks are below 40, return "E"
    else return "not applicable"; // If none of the above conditions are met, return "not applicable"
}

// Calculate and display the grade for entered marks
console.log(calculateGrade(enteredMarks))