const numberOfFilms = +prompt('Сколько фальмов вы уже посмотрели?', ''); //+ means thai answer is a namber

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
b = prompt('На сколько оцените его?',''),
c = prompt('Один из последних просмотренных фильмов?',''),
d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);