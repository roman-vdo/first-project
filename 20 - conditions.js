"use strict";

if (4 == 9) {
    console.log("ok");
} else {
    console.log("error!");
}

const num = 11; 

// if (num < 49) {
//     console.log ("error");
// } else if (num > 100) {
//     console.log ("cлишком много");
// } else {
//     console.log ("ОК!");
// }

// (num === 50) ? console.log("ok") : console.log("errror");

switch (num) {
    case 49: 
        console.log ("error");
        break;
    case 100: 
        console.log ("error");
        break;     
    case 50: 
        console.log ("OK");
        break; 
    default:
        console.log ("НЕ в этот раз");
}
