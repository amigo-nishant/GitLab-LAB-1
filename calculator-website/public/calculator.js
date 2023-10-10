// public/calculator.js
let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('result').value = '';
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

