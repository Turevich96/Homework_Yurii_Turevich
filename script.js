"use strict";
/* 1.1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
*/
/*
let shoppingList = [
  ["хліб", 2, true],
  ["молоко", 1, false],
  ["кава", 2, true],
  ["сир", 1, false],
  ["банани", 5, false],
];
*/
/*
function showShoppingList() {
  let buyList = [];
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i][2] == false) {
      buyList.unshift(shoppingList[i][0]);
    } else if (shoppingList[i][2] == true) {
      buyList.push(shoppingList[i][0]);
    }
  }
  return buyList;
}
//  alert(showShoppingList());

function addBuy() {
  for (let i = 0; i < shoppingList.length; i++) {
    shoppingList[i][1] += +prompt(
      ` Ви купили  ${shoppingList[i][0]}   ${shoppingList[i][1]}  шт. Купити ще __ штук? `
    );
  }

  for (let i = 0; i < shoppingList.length; i++) {
    alert(` Ви купили  ${shoppingList[i][0]}   ${shoppingList[i][1]}  шт.  `);
  }
  return "Дякуємо за покупки!";
}
alert(addBuy());


function addBuyProduct() {
  let c = 0;
  while (c < 1) {
    let productName = prompt("Який товар Ви хочете купити?");
    let error = 0;
    for (let i = 0; i < shoppingList.length; i++) {
      if (productName == shoppingList[i][0]) {
        shoppingList[i][2] = true;
        alert("Товар куплено!");
        shoppingList[i][2] = true;
        error = 1;
      }
    }
    if (error != 1) {
      alert("Такого товару не має!");
    }
    c = +prompt(
      "Щоб купити ще одни товар нажміть - 0 , щоб закінчити покупки нажміть - 1"
    );
  }
  alert("Дякуємо за покупки!");
  return shoppingList;
}
alert(addBuyProduct());
*/
/* 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке.
*/
/*
let shoppingList = [
  ["хліб", 2, 12],
  ["молоко", 1, 22],
  ["кава", 2, 120],
  ["сир", 1, 80],
  ["банани", 5, 60],
];
*/
/*
function printCheck() {
  return shoppingList;
}
document.write(printCheck());


function showSumProduct() {
  let sum = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    sum += shoppingList[i][2];
  }
  return sum;
}
alert(showSumProduct());


function showBigPrice() {
  let bigPrice = 0;
  let productName;
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i][2] > bigPrice) {
      bigPrice = shoppingList[i][2];
      productName = shoppingList[i][0];
    }
  }
  return `Найдорожчий товар у чеку ${productName} -${bigPrice}грн. `;
}
alert(showBigPrice());


function calcSum() {
  let sumArifmetic = 0;
  let sum = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    sum += shoppingList[i][2];
  }
  sumArifmetic = sum / (shoppingList.length - 1);
  return `Середня ціна товарів чеку ${sumArifmetic}грн. `;
}
alert(calcSum());
*/

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
/*
let styleList = [
  [" color:red;"],
  [" font-size:50px;"],
  [" text-decoration: underline;"],
  [" text-transform: uppercase;"],
];

let text;
let style = "";
function showText() {
  text = prompt("Введіть текст", "");

  for (let i = 0; i < styleList.length; i++) {
    style += styleList[i][0];
  }

  return `<p style =" ${style}"> ${text}</p>`;
}
document.write(showText());
*/

/* 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту).
*/

let colegRoom = [
  [["аудиторія-1 "], [20], ["фінанси"]],
  [["аудиторія-2 "], [10], ["бухгалтерська справа"]],
  [["аудиторія-3 "], [15], ["банківська справа"]],
  [["аудиторія-4 "], [12], ["фізична культура"]],
];
/*
function showRoom() {
  let roomName = "";
  for (let i = 0; i < colegRoom.length; i++) {
    roomName += colegRoom[i][0];
    roomName += ",";
  }
  return roomName;
}
alert(showRoom());
*/
/*
function showFacultet() {
  for (let c = 0; c < colegRoom.length; c++) {
    let facultet = prompt(
      "Аудиторії для якого факультету Вас цікавлять? (фінанси, бухгалтерська справа, банківська справа,фізична культура) ",
      ""
    );
    let facultetLoverCase = facultet.toLowerCase();

    for (let i = 0; i < colegRoom.length; i++) {
      if (facultetLoverCase == colegRoom[i][2]) {
        return colegRoom[1][0];
      } else {
        c = 0;
      }
    }
  }
}
alert(showFacultet());
*/
