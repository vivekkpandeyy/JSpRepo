function performOperation(operation) {
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;
    
    // Debugger point to check input values
    debugger;
    
    // Convert to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Please enter valid numbers in both fields', 'error');
        return;
    }
    
    let result;
    let operationSymbol;
    
    // Perform the selected operation
    switch (operation) {
        case 'add':
            debugger; // Debug point for addition
            result = num1 + num2;
            operationSymbol = '+';
            break;
        case 'subtract':
            debugger; // Debug point for subtraction
            result = num1 - num2;
            operationSymbol = '-';
            break;
        case 'multiply':
            debugger; // Debug point for multiplication
            result = num1 * num2;
            operationSymbol = '×';
            break;
        case 'divide':
            debugger; // Debug point for division
            if (num2 === 0) {
                displayResult('Cannot divide by zero', 'error');
                return;
            }
            result = num1 / num2;
            operationSymbol = '÷';
            break;
        default:
            displayResult('Invalid operation', 'error');
            return;
    }
    
    // Display the result
    displayResult(`${num1} ${operationSymbol} ${num2} = ${result}`, 'success');
}

function displayResult(message, type) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p class="${type}">${message}</p>`;
    
    // Debugger point to check the displayed result
    debugger;
}