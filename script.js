"use script";

// dz1
let name = prompt("Ваше ім'я?", "");
alert(`Привіт, ${name}! `);

// dz2
let Birthday = prompt("Рік Вашого народження?", "");
const yearNow = 2020;
alert(`Вам ${yearNow - Number(Birthday)} років!`);

// dz3
width = prompt("Довжина сторони квадрата?", "");
alert(`P= ${width * 4}!`);

// dz4
const p = 3.14;
let rad = prompt("Вкажіть радіус ?", "");
alert(`Площа = ${p * (rad * rad)}!`);

// dz5
let a = prompt("Вкажіть відстань між містами");
let t = prompt("Вкажіть час в дорозі?");
alert(`Ваша швидкість ${a / t}`);

// dz6
let dol = prompt("Введіть суму $");
const krosKurs = 0.8;
alert(`Сума ${krosKurs * dol} Євро`);

// dz7
let memory = prompt("Вкажіть розмір пам*яті ГБ ?");
const file = 0.82;
alert(`На Вашу флешку можна записати ${Math.floor(memory / file)} файлів`);

// dz8
let money = prompt("Скільки у Вас грошей?");
let shokoladka = prompt("Вартість шоколадки?");
let zdacha = alert(
  `Ви можете купити ${Math.floor(
    money / shokoladka
  )} шоколадок! У Вас залишиться ${money % shokoladka} грн`
);

// dz9
let number = prompt(`Введіть трохзначне число`);
let hundred = Math.floor(number / 100);
let tenth = Math.floor(number / 10) % 10;
let unit = number % 10;
let revers = String(unit) + String(tenth) + String(hundred);
alert(`${revers}`);

// dz10
const rent = 0.05 / 12;
let sum = prompt(`Введіть суму депозиту`);
alert(`Ваш дохід ${sum * rent} грн`);
