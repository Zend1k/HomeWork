// Функция для проверки
function isInteger(value) {
    return Number.isInteger(Number(value));
}

// Функция для получения целого числа
function getIntegerInput(promptMessage) {
    let value;
    do {
        value = prompt(promptMessage);
    } while (!isInteger(value));
    return Number(value);
}

// Получаем число, находим все кратные 5 числа
const userNumber = getIntegerInput("Please enter a number:");
const multiplesOfFive = [];

for (let i = 0; i <= userNumber; i++) {
    if (i % 5 === 0) {
        multiplesOfFive.push(i);
    }
}

const multiplesOfFiveString = multiplesOfFive.length > 0 ? multiplesOfFive.join(', ') : "Sorry, no numbers";

// Поиск простых чисел
const m = getIntegerInput("Please enter the first number (m):");
const n = getIntegerInput("Please enter the second number (n):");
const lowerBound = Math.min(m, n);
const upperBound = Math.max(m, n);

// Функция проверки
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primeNumbers = [];
for (let i = lowerBound; i <= upperBound; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}

const primeNumbersString = primeNumbers.length > 0 ? primeNumbers.join(', ') : "Sorry, no prime numbers";

// Открыть новое окно и вывести результаты
const resultWindow = window.open("", "Result Window", "width=400,height=400");
resultWindow.document.write(`<p>Multiples of 5 from 0 to ${userNumber}: ${multiplesOfFiveString}</p>`);
resultWindow.document.write(`<p>Prime numbers from ${lowerBound} to ${upperBound}: ${primeNumbersString}</p>`);
