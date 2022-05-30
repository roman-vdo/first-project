/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};



function rememerMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
              b = prompt("На сколько оцените его?", "");
    
        if (a != null && a != "" && b != null && b != "" && a.length < 50) {
            personalMovieDB.movies[a] =b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememerMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Error");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`, "");

        while (a == "" || a == null || typeof(a) == "number" || a.length > 50) {
            a = prompt(`Ваш любимый жанр под номером ${i}`, "");
        }
        personalMovieDB.genres[i - 1] = a;
    }
}
writeYourGenres();

showMyDB(personalMovieDB.privat);

