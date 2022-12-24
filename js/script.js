"use strict";

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
let lastWatchedMovies = prompt("Один из последних просмотренных фильмов?");
let ratingLastWatchedMovies = +prompt("На сколько оцените его?");
personalMovieDB.movies[lastWatchedMovies] = ratingLastWatchedMovies;

let lastWatchedMovies2 = prompt("Один из последних просмотренных фильмов?");
let ratingLastWatchedMovies2 = +prompt("На сколько оцените его?");
personalMovieDB.movies[lastWatchedMovies2] = ratingLastWatchedMovies2;

console.log(personalMovieDB.movies)