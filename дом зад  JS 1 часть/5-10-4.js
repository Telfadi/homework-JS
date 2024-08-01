const userName = prompt('Введите Ваше имя:');
const yearOfBirth = +prompt('Введите Ваш год рождения:');
const currentYear = 2024;
const age = currentYear-yearOfBirth;
const  newAge = age % 10;
if (isNaN(yearOfBirth) || userName === "") {
    alert("Год не число или пустое имя!");
}else if(newAge === 1) {
    alert(`${userName} : ${age} год`)
}else if (newAge === 2 || newAge === 3 || newAge === 4) {
    alert(`${userName} : ${age} года`)
}else {
    alert(`${userName} : ${age} лет`)
}