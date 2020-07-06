'use strict';

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

let red = document.querySelector('.svitlofor-corpus__red');


let yellow = document.querySelector('.svitlofor-corpus__yellow');


let green = document.querySelector('.svitlofor-corpus__green');



let count = 0;
function switching() {


    if (count == 1) {
        red.style.backgroundColor = 'red';
        green.style.backgroundColor = 'silver';


    } if (count == 2) {
        yellow.style.backgroundColor = 'yellow';
        red.style.backgroundColor = 'silver';

    } if (count == 3) {
        green.style.backgroundColor = 'green';
        yellow.style.backgroundColor = 'silver';
    }
    if (count == 4) {
        count = 1;
        green.style.backgroundColor = 'silver';
        red.style.backgroundColor = 'red';
    }

}
let buttonNext = document.getElementById('button');
buttonNext.addEventListener('click', next)
buttonNext.addEventListener('click', switching)
function next() {
    count++;



}


// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает. 

let openWindow = document.getElementById('open');
openWindow.onclick = open;


let modalWindow = document.getElementById('window');
let exit = document.getElementById('exit');
exit.onclick = exitWindow;
function open() {

    modalWindow.style.display = 'block'

}
function exitWindow() {
    modalWindow.style.display = 'none'
}

// 1. Создать страницу, которая выводит нумерованный список песен:

var playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];

let list = document.createElement('ol');
document.getElementById('window').append(list)

for (let i = 0; i < playList.length; i++) {
    let trek = document.createElement('li');
    trek.innerText = `${playList[i].author} : ${playList[i].song}`
    list.append(trek);
}




