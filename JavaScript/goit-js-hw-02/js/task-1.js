"use strict";
// console.log("test");
// debugger;

const array = [];

const logItems = function (array) {
  for (const value of array) {
    const number = array.indexOf(value) + 1;
    console.log(
      `elementNumber: ${number},
      elementValue: ${value}`
    );
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//=============================================== SOLUTION 

// const logItems = function (array) {
//   for (let i = 1; i < array.length; i += 1) {
//     array[1] = "Mango";
//     array[2] = "Poly";
//     array[3] = "Ajax";
//     console.log(`elementNumber : ${i}`, `elementValue : ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//=============================================== SOLUTION 

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`elementNumber : ${i + 1}`, `elementValue : ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);