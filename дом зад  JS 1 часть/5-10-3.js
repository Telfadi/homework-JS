const userName = prompt('Введите Ваше имя:');
const yearOfBirth = +prompt('Введите год рождения:');
const assurance = confirm('Год должен быть числом!')
const currentYear = 2024;
const age = currentYear-yearOfBirth;
alert(`${userName} : ${age}`);