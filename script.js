"use strict";

// 1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
/*
function getNumb() {

  let a = +prompt("Введіть число");
  let b = +prompt("Введіть число");

  if (a > b) {
    return -1;

  } else if (a < b) {
    return 1;

  } else if (a == b) {
    return 0;
  }
}

alert(getNumb());


// 2.Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {
  let result = 1;
  while (n) {
    result *= n--;
  }
  return result;
}
let n = +prompt("Введіть число");
alert(factorial(n));


// 3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

let a = +prompt("Введіть число");
let b = +prompt("Введіть число");
let c = +prompt("Введіть число");

function showNumber(a, b, c) {
  return String(a) + String(b) + String(c);
}

alert(showNumber(a, b, c));


// 4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

let a = +prompt("Введіть число");
let b = +prompt("Введіть число");

function calcP(a, b) {
  if (a > 0 && b > 0) {
    return a * b;
  } else if (a <= 0) {
    return b * b;
  } else if (b <= 0) {
    return a * a;
  }
}
alert(calcP(a, b));


// 5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function checkNumb() {
  let a = +prompt("Введіть число");
  let result = 0;
  let i = 1;
  while (i < a) {
    if (a % i == 0) {
      result += i;
    }

    i++;
  }
  if (a == result) {
    return "Число совершенне!";
  } else {
    return "Число НЕ совершенне!";
  }
}

alert(checkNumb());


// 6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function checkDiapazon() {
  let c = +prompt("Введіть число");
  let d = +prompt("Введіть число");

  while (c <= d) {
    let result = 0;
    let i = 1;
    while (i < c) {
      if (c % i == 0) {
        result += i;
      }

      i++;
    }
    if (c == result) {
      alert(`${c} Число совершенне!`, ``);
    }
    c++;
  }
  return "finish";
}
alert(checkDiapazon());


// 7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function showTime() {
  let i = 1;
  let hour;
  let minute;
  let second;

  while (i < 2) {
    let hor = +prompt("Введіть години ", "");
    if (hor >= 0 && hor <= 24) {
      i = 2;
      hour = hor;
    }
  }

  while (i < 3) {
    let min = +prompt("Введіть хвилини", "");
    if (min >= 0 && min <= 60) {
      i = 3;
      minute = min;
    }
  }

  while (i < 4) {
    let sec = +prompt("Введіть секунди", "");
    if (sec >= 0 && sec <= 60) {
      i = 4;
      second = sec;
    }
  }

  if (minute == undefined) {
    minute = "00";
  } else if (second == undefined) {
    second == `00`;
  }
  let time = String(hour) + ":" + String(minute) + ":" + String(second);
  return time;
}
alert(showTime());


// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function showTime() {
  let hor = +prompt("Введіть години ", "");
  let min = +prompt("Введіть хвилини", "");
  let sec = +prompt("Введіть секунди", "");

  return hor * 60 * 60 + min * 60 + sec + " sec";
}

alert(showTime());


// 8.Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function showTime() {
  let sec = +prompt("Введіть секунди", "");
  let hour = Math.floor(sec / 60 / 60);
  let min = Math.floor(sec / 60) - hour * 60;
  let second = sec - (hour * 60 * 60 + min * 60);
  let time = String(hour) + ":" + String(min) + ":" + String(second);
  return time;
}

alert(showTime());
*/

