'use strict';

// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 


class Radius {
    constructor(radiusKrug) {
        this.radiusKrug = radiusKrug;
        this.diameterKrug = this.radiusKrug * 2;
    }
    get krug() {
        return this.radiusKrug
    }
    set krug(radiusKrug) {
        this.radiusKrug = radiusKrug;
    }
    get diameter() {
        return this.diameterKrug;
    }
    square() {
        return (3.14 * (this.radiusKrug * this.radiusKrug))
    }
    length() {
        return (3.14 * this.diameterKrug)
    }
}
let krugOne = new Radius(15);
console.log(krugOne);
// krugOne.krug = 20;
console.log(krugOne.square());
console.log(krugOne.length());
//console.log(Radius.square);




// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 


class Marker {
    constructor(color) {
        this.color = color;
        this.distansMarker = 100;

    }
    print() {
        this.text = prompt('Введіть текст');
        this.textLenght = this.text.length;
        this.distansMarker -= this.textLenght * 0.5;
        for (let i = 0; i <= this.text.length; i++) {
            if (this.text[i] === ' ') {
                this.distansMarker += 0.5;
            }
        }
        if (this.distansMarker > 0) {

            return document.write(`<p style = " color:${this.color}"> ${this.text}</p>`);
        }
        else if (this.distansMarker <= 0) {
            return alert('закінчилось чорнило');
            this.distansMarker = 0;
        }
    }

}
let markerOne = new Marker('red');
console.log(markerOne.print())

class RefuelingMarker extends Marker {
    constructor(color) {
        super(color);

    }
    zapravka() {
        return markerOne.distansMarker = 100
    }
}

let refueling = new RefuelingMarker('red');



// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


class Employee {
    constructor(firstName, lastName, age, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position

    }
}

let employee1 = new Employee('yura', 'turevich', 24, 'manager');
let employee2 = new Employee('sasha', 'doodko', 20, 'kasir');
let employee3 = new Employee('oksana', 'ivanovah', 24, 'manager')
let employeeBank = { employee1, employee2, employee3 }

class EmpTable {
    constructor(employeeBank) {
        this.employeeBank = employeeBank;
    }
    getHtml() {
        return console.table(employeeBank)
    }
}
let getEmployee = new EmpTable;
console.log(getEmployee.getHtml())
