const userPromoCode = prompt("Введите промокод:").toLowerCase();

if (userPromoCode === "скидка") {
    alert("Промокод применён");
} else {
    alert("Промокод не работает");
}