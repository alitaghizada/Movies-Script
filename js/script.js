'use strict';

// Первая задача
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

// Вторая задача
const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false
}

// Третья задача

let lastWatchedMovies;
let ratingLastWatchedMovies;
while (true) {
    lastWatchedMovies = prompt("Один из последних просмотренных фильмов? Если хотите прервать - введите 'q'");
    if (lastWatchedMovies == 'q') {break;}
    if (lastWatchedMovies.length <= 0 || lastWatchedMovies == " "){
        alert("Нельзя вводить пустое значение.")
        continue;
    }

    ratingLastWatchedMovies = +prompt("На сколько оцените его?");
    if (ratingLastWatchedMovies == 0) {break;}
    if (ratingLastWatchedMovies.length <= 0 || ratingLastWatchedMovies == " "){
        alert("Нельзя вводить пустое значение.")
        continue;
    }
    personalMovieDB.movies[lastWatchedMovies] = ratingLastWatchedMovies;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов.")
} else if (personalMovieDB.count >= 10 & personalMovieDB.count <= 30) {
    alert("Вы классический зритель!")
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман!")
} else {
    alert("Произошла ошибка.")
}

console.log(personalMovieDB.movies)
