"use strict";
// console.log("test");
// debugger;
import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  return users.sort(user => user.name - user.friends).map(user => user.name)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//* Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)