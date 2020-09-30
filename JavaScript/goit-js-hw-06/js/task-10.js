"use strict";
// console.log("test");
// debugger;
import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users.reduce((totalSkills, user) => {
      totalSkills.push(...user.skills);
      return totalSkills
    }, []).filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();
  //============================================================
  // return users.sort((a, b) => a.skills.length - b.skills.length).push(...users.skills);
  //============================================================
  // return users.map(user => user.skills);
};


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//* Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.