const userInput = +prompt("Введите любое число:");

if (!isNaN(userInput)) {
    const newArr = [];
    for (let i = 0; i <= userInput; i++) {
        newArr.push(i);
    }
    console.log(newArr);
} else {
    console.log("Вы ввели некорректное число.");
}
