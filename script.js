'use strict';
// 1. Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

let textArea = document.createElement('textarea');
let textDiv = document.getElementById('text');
let content = textDiv.innerText;

document.body.append(textArea)
textArea.style.display = 'none';

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        textArea.innerText = content;
        textDiv.style.display = 'none';
        textArea.style.display = 'block';
        textArea.setAttribute('class', 'text')
        textArea.focus()
    }
});



document.addEventListener('keydown', function (event) {
    if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {


        textArea.style.display = 'none';
        textDiv.style.display = 'block';
        textDiv.innerText = content;
        textDiv.innerText = textArea.value;
    }
});

//3. Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.





let windowRightX;
let windowBottomY;

function clickDown(event) {
    windowRightX = textDiv.getBoundingClientRect().right;
    windowBottomY = textDiv.getBoundingClientRect().bottom;


    if (event.clientX > windowRightX - 10 && event.clientX < windowRightX + 5 && event.clientY > windowBottomY - 10 && event.clientY < windowBottomY + 5) {

        document.addEventListener('mouseup', clickUp);

    }

}

function clickUp(eventUp) {

    let width = (eventUp.clientX - windowRightX) + textDiv.offsetWidth - 35;
    let height = (eventUp.clientY - windowBottomY) + textDiv.offsetHeight - 35;

    textDiv.style.width = width + "px";
    textDiv.style.height = height + "px";



}
textDiv.addEventListener('mousedown', clickDown);