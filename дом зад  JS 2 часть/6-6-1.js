const userWord = prompt('Введите слово:');
function isPalindrome(userWord) {
    const reverseuserWord = userWord.split('').reverse().join('');

    if (userWord === reverseuserWord) {
        console.log(`Слово "${userWord}" является палиндромом.`);
    } else {
        console.log(`Слово "${userWord}" не является палиндромом.`);
    }
}
isPalindrome(userWord)
