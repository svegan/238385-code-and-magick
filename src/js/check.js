"use strict";

var getMessage = function(a, b){

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
        var distancePath = a.map(function(elem, index){
            if (typeof elem !== "number" && typeof b[index] !== "number") {
                throw "Args should be numbers";
            }
            return elem * b[index];

        }).reduce(function(previousValue, currentValue){
            return previousValue + currentValue;
        });

        return "Я прошёл " + distancePath + " метров";

    // Единственный первый массив
    } else if (Array.isArray(a)){
        var numberOfSteps = a.reduce(function(previousValue, currentValue){
            return previousValue + currentValue;
        });

        return "Я прошёл " + numberOfSteps + " шагов";

    // Ошибка
    } else {
        return "Переданы некорректные данные";
    }
};
