"use strict";

var getMessage = function(a, b){

    var distancePath = 0;
    var multiplications;
    var numberOfSteps = 0;
    var i;

    // Булевный
    if (typeof a === "boolean") {
        if (a === true) {
            return "Я попал в " + b;
        } else {
            return "Я никуда не попал";
        }

    // Число
    } else if (typeof a === "number"){
        return "Я прыгнул на " + a * 100 + " сантиметров";

    // Оба массивы
    } else if (Array.isArray(a) && Array.isArray(b)){
        multiplications = a.map(function(elem, index){
            if (typeof elem === "number" && typeof b[index] === "number") {
                return elem * b[index];
            }
        });
        for (i = 0; i < multiplications.length; i++) {
            distancePath += multiplications[i];
        }
        return "Я прошёл " + distancePath + " метров";

    // Единственный первый массив
    } else if (Array.isArray(a)){
        for (i = 0; i < a.length; i++) {
           numberOfSteps += a[i];
        }
        return "Я прошёл " + numberOfSteps + " шагов";

    // Ошибка
    } else {
        return "Переданы некорректные данные";
    }
};
