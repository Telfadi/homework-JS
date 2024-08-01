let userInput = prompt("Введите любое число:");
let number = +userInput; // Преобразуем строку в число

if (!isNaN(number)) {
    let square = number ** 2;
    let cube = number ** 3;

    alert(`Число: ${number}\nКвадрат числа: ${square}\nКуб числа: ${cube}`);
} else {
    alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
}