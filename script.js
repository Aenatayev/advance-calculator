let displayElement = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(selectedOperation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function toggleSign() {
    if (currentOperand.startsWith('-')) {
        currentOperand = currentOperand.substring(1);
    } else {
        currentOperand = '-' + currentOperand;
    }
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentOperand || '0';
}

// Advanced Functions
function calculateSin() {
    currentOperand = Math.sin(parseFloat(currentOperand)).toString();
    updateDisplay();
}

function calculateCos() {
    currentOperand = Math.cos(parseFloat(currentOperand)).toString();
    updateDisplay();
}

function calculateTan() {
    currentOperand = Math.tan(parseFloat(currentOperand)).toString();
    updateDisplay();
}

function calculateLog() {
    currentOperand = Math.log10(parseFloat(currentOperand)).toString();
    updateDisplay();
}

function calculateSqrt() {
    currentOperand = Math.sqrt(parseFloat(currentOperand)).toString();
    updateDisplay();
}

function calculateExp() {
    currentOperand = Math.exp(parseFloat(currentOperand)).toString();
    updateDisplay();
}
