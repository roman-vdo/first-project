"use strict";

function fib(number) {
    let fibNumbers = "0";


    if (typeof(number) == "number" && Number.isInteger(number) && number > 0) {
        const fibArr = [0, 1];
        for (let i = 2; i <= number; i++ ) {
            fibArr[i] = fibArr[i-1] + fibArr[i-2];
            fibNumbers += ` ${fibArr[i-1]}`;
        }
        console.log(fibNumbers);
        return fibNumbers;
    } else {
        fibNumbers = "";
        console.log(fibNumbers);
        return fibNumbers;
    }

}

fib(1);

