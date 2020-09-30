"use strict";
// console.log("test");
// debugger;

const findLongestWord = function (string) {
  const wordSplit = string.split(" ");
  console.log(wordSplit);
  let longestWord = "";
  for (let i = 0; i < wordSplit.length; i += 1) {
    if (wordSplit[i].length > longestWord.length) {
      longestWord = wordSplit[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'