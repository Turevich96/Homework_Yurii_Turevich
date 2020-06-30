// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

const autoPark = {
    brand: "bmw",
    model: '520',
    year: 2006,
    speed: 100,
}

// Функция для вывода на экран информации об автомобиле;

function showInfoCar() {

    for (let item in autoPark) {
        document.write(item + '  - ' + autoPark[item] + '<br>')
    }
}

console.log(showInfoCar())

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function calcTimeCar() {
    let distans = +prompt('Введіть відстань');
    let resultTime = distans / autoPark.speed;
    if (resultTime > 4) {
        resultTime += Math.floor(resultTime / 4)
    }
    return (`Ви прибудете на місце через ${resultTime} годин`)
}
document.write(calcTimeCar())