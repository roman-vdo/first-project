"use strict";

// Место для первой задачи
function sayHello(name) {
    return "Привет, " + name + "!";
}



// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}


// Место для третьей задачи
function getMathResult(a, b) {
    let result = "";
    if (typeof(b) === "number" && b > 0 ) {
        for (let i = 1; i <= b; i++) {
            result += a * i;
            if (i!==b) {
                result += "---";
            }
        }
        return result;
    } else {
        return a ;
    }
}
