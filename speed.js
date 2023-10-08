// Import the 'prompt-sync' library to read user input from the console
let prompt = require('prompt-sync')();

// Prompt the user to enter their car's speed (marks)
let input = prompt('Enter speed in km/h: ');

// Parse the user input as a floating-point number
let enteredSpeed = parseFloat(input);

// Define a function called 'speedDetector' that takes a 'speed' as an argument
function speedDetector(speed) {
    // Define the speed limit
    const limit = 70;
  
    // Check if the entered speed is within the limit
    if (speed <= limit) {
      // If the speed is within the limit, return "Ok"
      return "Ok";

    } else if (speed > limit) {
      // If the speed is above the limit, calculate the demerit points
      const points = (speed - limit) / 5;
      

  
      // Check if the calculated points exceed 12 (which leads to a license suspension)
      if (points > 12) {
        // If points exceed 12, return "License suspended."
        return "License suspended.";
      } else {
        // If points are within the limit, return the number of points
        return "Points:" + points;
      }

    }
}
// Call the speedDetector function and print enteredSpeed inside the function
    console.log(speedDetector(enteredSpeed))