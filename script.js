" use script ";
/*
// dz1
let year = prompt(`Скільки Вам років?`);
if ((year <= 2) & (year != 0)) alert(`Ви ще дитина!`);
if ((year >= 12) & (year <= 18)) alert(`Ви ще дитина!`);
if ((year >= 18) & (year <= 60)) alert(`Ви вже дорослі!`);
if (year > 60) alert(`Ви пенсіонер`);

// dz2
let number = prompt("Введіть цифру від 0-9");
if (number == 0) alert(" ) ");
if (number == 1) alert(" ! ");
if (number == 2) alert(" @ ");
if (number == 3) alert(" # ");
if (number == 4) alert(" $ ");
if (number == 5) alert(" % ");
if (number == 6) alert(" ^ ");
if (number == 7) alert(" & ");
if (number == 8) alert(" * ");
if (number == 9) alert(" ) ");

// dz3
let number = prompt("Введіть трьохзначне число", "");
let hundreds = Math.floor(number / 100);
let tenth = Math.floor(number / 10) % 10;
let unit = number % 10;

if ((hundreds == tenth) | (hundreds == unit) | (unit == tenth))
  alert("Є однакові цифри в числі!", "");

// dz4
let year = prompt("Введіть рік", "");

// dz 5

// dz6
let usd = prompt("Введіть суму $", "");
const eur = 0.8;
const uah = 26.7;
const azn = 1.1;
let result;
let cheng = prompt(
  `Виберіть валюту для конвертації: EUR - 1, UAH - 2, AZN - 3`,
  ``
);
if (cheng == 1) alert(`EUR = ${usd * eur}`);
if (cheng == 2) alert(`UAH = ${usd * uah}`);
if (cheng == 3) alert(`AZR = ${usd * azn}`);
*/
// dz7
const sel1 = 0.03;
const sel2 = 0.05;
const sel3 = 0.07;
let sum = prompt("Введіть суму покупки", "");
if ((sum >= 200) & (sum <= 300))
  alert(`Сума до оплати зі знижкою ${sum - sum * sel1}`, ``);
if ((sum > 300) & (sum <= 500))
  alert(`Сума до оплати зі знижкою ${sum - sum * sel2}`, ``);
if (sum > 500) alert(`Сума до оплати зі знижкою ${sum - sum * sel3} грн!`, ``);
