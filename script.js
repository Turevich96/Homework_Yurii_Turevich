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
    }
    get krug() {
        return `Радіус кругу ${radiusKrug}`
    }
    get krug() {

    }
    square() {
        return (3.14 * (radiusKrug * radiusKrug))
    }

    length() {
        return (2 * 3.14 * this.radiusKrug)
    }
}
let krugOne = new Radius(15);
console.log(Radius.length);