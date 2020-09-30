"use strict";
// console.log("test");
// debugger;

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

let newUser = function (mood, newHobby, newPremium) {
  user.mood = mood;
  user.hobby = newHobby;
  user.premium = newPremium;
}
// console.log(user);
newUser('happy', 'skydiving', 'false')
console.log(user);

const keys = Object.keys(user);
// console.log(keys);

for (const key of keys) {
  // console.log(key);
  console.log(key, ":",
    user[key]);
  // console.log(`key: ${key}`);
  // console.log(`value: ${user[key]}`);
}