// Функция для выполнения математических операций
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
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
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Ошибка: деление на ноль";
            }
            break;
        default:
            result = "Неверная операция";
    }
    return result;
}

// Получаем от пользователя два числа и математическую операцию
const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));
const operator = prompt("Введите операцию (+, -, *, /):");

// Проверяем, что оба введенных значения являются числами
if (!isNaN(num1) && !isNaN(num2)) {
    // Выполняем математическую операцию и выводим результат в модальное окно
    const result = calculate(num1, num2, operator);
    alert(`Результат: ${result}`);
} else {
    alert("Ошибка: введите корректные числа.");
}
