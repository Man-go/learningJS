"use strict";
 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''), 
//           b = prompt('На сколько оцените его?');
    
//     if (a == '' || b == '')

//     personalMovieDB.movies[a] = b;
// }

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    confirm("Просмотрено довольно мало фильмов", '');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    confirm("Вы классический зритель", '');
} else if (personalMovieDB.count >= 30) {
    confirm("Вы киноман", '');
} else {
    confirm("Произошла ошибка", '');
}

let i = 0;
while (i < numberOfFilms) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?');

    if (a !== '' || b !== '' || a.length < 50 || a !== null || b !== null) {
        personalMovieDB.movies[a] = b;
        i++;
    } 
}

console.log(personalMovieDB);