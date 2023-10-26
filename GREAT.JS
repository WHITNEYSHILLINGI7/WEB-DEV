//number 2
// Function to calculate the grade based on the score
function calculateGrade(score) {
    try {
      // Check if the input is a valid number
      if (isNaN(score)) {
        throw new Error("Invalid input");
      }
      
      // Determine the grade based on the score
      if (score >= 90 && score <= 100) {
        return "A";
      } else if (score >= 80 ) {
        return "B";
      } else if (score >= 70 ) {
        return "C";
      } else if (score >= 60 ) {
        return "D";
      } else if (score >= 0 && score <= 59) {
        return "F";
      } else {
        throw new Error("Invalid score");
      }
    } catch (error) {
      return error.message;
    }
  }
  // Testing the calculateGrade function
console.log(calculateGrade(95)); // Output: A
console.log(calculateGrade(82)); // Output: B
console.log(calculateGrade(75)); // Output: C
console.log(calculateGrade(63)); // Output: D
console.log(calculateGrade("abc")); // Output: Invalid input
console.log(calculateGrade(101)); // Output: Invalid score
