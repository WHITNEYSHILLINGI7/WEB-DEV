//number 1
// Function to calculate the result of a mathematical expression
function calculate(expression) {
    try {
      // Evaluate the mathematical expression using the eval() function
      const result = eval(expression);
      
      // Check if the result is a valid number
      if (isNaN(result)) {
        throw new Error("Invalid expression");
      }
      
      return result;
    } catch (error) {
      return error.message;
    }
  }

  // Testing the calculate function
console.log(calculate("2 + 3")); // Output: 5
console.log(calculate("4 * 5")); // Output: 20
console.log(calculate("10 / 2")); // Output: 5
console.log(calculate("10 / 0")); // Output: Infinity
console.log(calculate("2 +")); // Output: Invalid expression

