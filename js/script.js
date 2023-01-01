'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();


const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}: `)
        personalMovieDB.genres.push(favoriteGenre);
    }
}

writeYourGenres();

console.log(personalMovieDB);


let lastWatchedMovies;
let ratingLastWatchedMovies;

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов.")
    } else if (personalMovieDB.count >= 10 & personalMovieDB.count <= 30) {
        alert("Вы классический зритель!")
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман!")
    } else {
        alert("Произошла ошибка.")
    }
}

detectPersonalLevel();