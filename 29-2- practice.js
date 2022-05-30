
"use strict";

// Место для первой задачи

function getEnding(number, one, two, five) {
    let n = number;
    n %= 100;
    if (n >= 5 && n < 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n > 1 && n < 5) {
        return two;
    }
    return five;
}

function getTimeFromMinutes(minutes) {

    let getHours = 0,
        getMinutes = 0,
        timeFromMinutes ="";

    // Проверяем введенное значение, вляется ли оно целым и положительным числом 
    if ( typeof(minutes) == "number" &&  minutes >= 0 && Number.isInteger(minutes) ) {
        getHours = Math.trunc(minutes / 60);
        getMinutes = minutes % 60;
        timeFromMinutes = `Это ${getHours} ${getEnding(getHours, 'час', 'часа', 'часов')} и ${getMinutes} ${getEnding(getMinutes, 'минута', 'минуты', 'минут')}`;
        console.log(timeFromMinutes);
    } else {
        return "Ошибка, проверьте данные";
    }

    return timeFromMinutes;
}

getTimeFromMinutes(150);

// Место для второй задачи
function findMaxNumber(one, two, three, four) {
    if (
        one === "" ||
        typeof(one) !== "number" ||
        two === "" || 
        typeof(two) !== "number" ||
        three === "" || 
        typeof(three) !== "number" ||
        four === "" || 
        typeof(four) !== "number"
    ) {
        console.log(0);
        return 0;
    } else {
        if ( one > two && one > three && one > four ) {
            console.log(one);
            return one;
        } else if ( two > one && two > three && two > four ) {
            console.log(two);
            return two;
        } else if ( three > one && three > two && three > four ) {
            console.log(three);
            return three;
        } else {
            console.log(four);
            return four;
        }
    }

}

findMaxNumber(24,1100.1,500);



