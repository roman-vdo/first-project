"use strict";

function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500);

}

function second() {
    // do something
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    setTimeout(function() {
        console.log(`Я учу: ${lang}`);
    }, 500);
    callback();
}

function done() {
    console.log("Я прошел этот урок!");
}

learnJS("JS", done);
