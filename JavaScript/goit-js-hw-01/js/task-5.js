"use strict";
// console.log("test");

// debugger;
let country;
let message;
let credits;

// if (country === null) {
//   console.log("Вы отменили доставку!");
// } else {
//   console.log(country.toLowerCase());
// }

country = prompt("Введите страну, в которую необходимо доставить товар");
console.log(country);

switch (country.toLowerCase()) {
  case "китай":
    credits = 100;
    message = `Доставка в ${country}, будет стоить ${credits} кредитов`;
    break;
  case "чили":
    credits = 250;
    message = `Доставка в ${country}, будет стоить ${credits} кредитов`;
    break;
  case "австралия":
    credits = 170;
    message = `Доставка в ${country}, будет стоить ${credits} кредитов`;
    break;
  case "индия":
    credits = 80;
    message = `Доставка в ${country}, будет стоить ${credits} кредитов`;
    break;
  case "ямайка":
    credits = 120;
    message = `Доставка в ${country}, будет стоить ${credits} кредитов`;
    break;
  default:
    alert("В вашей стране доставка не доступна");
}

console.log(message);
