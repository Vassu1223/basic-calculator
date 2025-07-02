// Get reference to the display input element
let display = document.getElementById('display');

/**
 * Function to append value (numbers or operators) to the display
 * @param {string} val - the value to be added to the display
 */
function appendValue(val) {
  display.value += val;
}

/**
 * Function to clear the entire input display
 */
function clearDisplay() {
  display.value = '';
}

/**
 * Function to evaluate the expression and show result
 * If expression is invalid, show 'Error'
 */
function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the math expression
  } catch {
    display.value = 'Error'; // Handle invalid input
  }
}
