// ====================================
// НАСТРОЙКА ВВОДА ДАННЫХ (Node.js)
// ====================================
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1
function greet(name) {
    return "Привет, " + name + "!";
}

console.log(greet("Айли"));

// 2
function sum(a, b) {
    return a + b;
}

console.log("Сумма 3 и 5:", sum(3, 5));
console.log("Сумма 10 и 20:", sum(10, 20));

// 3
function showMessage() {
    console.log("Функция сработала!");
}

showMessage();

// 4
function onButtonClick() {
    console.log("Кнопка нажата!");
}

onButtonClick();

// 5
function mouseOver() {
    console.log("Навели мышь — цвет стал красным");
}

function mouseOut() {
    console.log("Убрали мышь — цвет вернулся");
}

mouseOver();
mouseOut();

// 6
let clickCount = 0;

function clickCounter() {
    clickCount++;
    console.log("Количество кликов:", clickCount);
}

clickCounter();
clickCounter();
clickCounter();

// 7
function inputText(callback) {
    rl.question("Введите текст: ", function (text) {
        console.log("Вы ввели:", text);
        callback();
    });
}

// 8
function showAlert(msg) {
    console.log("Сообщение:", msg);
}

showAlert("Это сообщение передано в функцию");

// 9
let currentColor = "blue";

function changeColor() {
    currentColor = currentColor === "blue" ? "red" : "blue";
    console.log("Текущий цвет:", currentColor);
}

changeColor();
changeColor();

// 10
function sumNumbers(callback) {
    rl.question("Введите первое число: ", function (a) {
        rl.question("Введите второе число: ", function (b) {
            console.log("Сумма:", Number(a) + Number(b));
            callback();
        });
    });
}

// 11
function createBox(color) {
    console.log("Создан квадрат 100x100 цвета:", color);
}

createBox("red");
createBox("green");
createBox("blue");

// 12
let list = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4", "Элемент 5"];

function clickOnList(index) {
    console.log("Нажат:", list[index]);
}

clickOnList(1);
clickOnList(4);

// 13
let time = 0;

const timerId = setInterval(() => {
    time++;
    console.log("Таймер:", time);

    if (time === 5) {
        clearInterval(timerId);
        console.log("Таймер остановлен");
    }
}, 1000);

// 14
function checkEmail(callback) {
    rl.question("Введите email: ", function (email) {
        if (email.includes("@")) {
            console.log("Email принят");
        } else {
            console.log("Ошибка: email некорректен");
        }
        callback();
    });
}

// 15
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function guessNumber() {
    rl.question("Угадайте число от 1 до 10: ", function (num) {
        attempts++;

        if (Number(num) < secretNumber) {
            console.log("Больше");
            guessNumber();
        } else if (Number(num) > secretNumber) {
            console.log("Меньше");
            guessNumber();
        } else {
            console.log("Угадал! Попыток:", attempts);
            rl.close();
        }
    });
}

inputText(() => {
    sumNumbers(() => {
        checkEmail(() => {
            guessNumber();
        });
    });
});
