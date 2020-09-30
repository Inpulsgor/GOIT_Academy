"use strict";
// console.log("test");
// debugger;
import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
};

console.log(calculateTotalBalance(users)); // 20916

//* Получить общую сумму баланса (поле balance) всех пользователей.