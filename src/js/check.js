"use strict";

var getMessage = function(a, b){
    if (typeof a === "boolean") {
        if (a === true) {
            return "Я попал в " + b;
        } else {
            return "Я никуда не попал";
        }

    } else if (typeof a === "number"){
        return "Я прыгнул на " + a * 100 + " сантиметров";
    } else if (Array.isArray(a) && Array.isArray(b)){

        var distancePath = 0;
        var multiplications = a.map(function(elem, index){
            if (typeof elem === "number" && typeof b[index] === "number") {
                return elem * b[index];
            }
        });

        for (var i = 0; i < multiplications.length; i++) {
            distancePath += multiplications[i];
        }

        return "Я прошёл " + distancePath + " метров";

    } else if (Array.isArray(a)){
        var numberOfSteps = 0;
        for (var i = 0; i < a.length; i++) {
           numberOfSteps += a[i];
        }
        return "Я прошёл " + numberOfSteps + " шагов";
    }else {
        return "Переданы некорректные данные";
    }
};
