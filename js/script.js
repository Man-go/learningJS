"use strict";
 
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
function detectPersonalLevel () {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        confirm("Просмотрено довольно мало фильмов", '');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        confirm("Вы классический зритель", '');
    } else if (personalMovieDB.count >= 30) {
        confirm("Вы киноман", '');
    } else {
        confirm("Произошла ошибка", '');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    let i = 0;
    while (i < 2) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?');

        if (a !== '' || b !== '' || a.length < 50 || a !== null || b !== null) {
            personalMovieDB.movies[a] = b;
            i++;
        } 
    }
}


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);