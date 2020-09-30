"use strict";
// console.log("test");
// debugger;
import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name)
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//* Получить массив имен пользователей по полу (поле gender).