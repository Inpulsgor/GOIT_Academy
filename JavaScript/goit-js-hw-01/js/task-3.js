"use strict";
// console.log("test");

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const input = prompt("Введите ваш пароль");
console.log(input);

if (input === null) {
  message = "Отменено пользователем!";
} else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

console.log(message);
alert(message);
