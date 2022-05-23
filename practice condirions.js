"use strict"; 

let num = 5; 

while (num < 11) {
    console.log(num);
    num++;
}

let num20 = 20;

first: for (let i = 20; i > 9; i--) {
    if (num20 === 13) {
        break first;
    }
    console.log(num20);
    num20--;
}

let num10 = 0;

for (let i = 0; i < 11; i++) {
    if (num10%2 === 0 && num10 !== 0) {
        console.log(num10);
    }
    num10++;
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let num16 = 2;
while (num16 <= 16) {
    if (num16 % 2 !== 0) {
        console.log(num16);
    } 
    num16++;
}

const arrayOfNumbers = [];
for (let i = 5; i < 11; i++) {
    for (let j = 0; i < 6; j++) {
        arrayOfNumbers[j] = i;
    }
}
console.log(arrayOfNumbers);




