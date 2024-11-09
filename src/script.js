function calculate(operation) {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const resultElement = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    if (isNaN(input1) || isNaN(input2) || input1 === '' || input2 === '') {
        errorMessage.textContent = 'Будь ласка, введіть коректні числа в обидва поля!';
        resultElement.textContent = '0';
        return;
    }
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                errorMessage.textContent = 'Ділення на нуль неможливе!';
                resultElement.textContent = '0';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorMessage.textContent = 'Невідома операція!';
            resultElement.textContent = '0';
            return;
    }
    result = result.toFixed(2);
    resultElement.textContent = result;
}
