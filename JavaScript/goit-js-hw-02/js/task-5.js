"use strict";
// console.log("test");

const checkForSpam = function (message) {
  let badWords = ["spam", "sale"];
  let smallWords = message.toLowerCase();
  // console.log(smallWords);

  if (smallWords.includes(badWords[0]) || smallWords.includes(badWords[1])) {
    return true;
  }
  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
