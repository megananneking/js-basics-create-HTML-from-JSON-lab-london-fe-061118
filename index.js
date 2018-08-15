let title = document.getElementById("title").innerHTML = movies.Titanic.title;

let director = document.getElementById("director").innerHTML = movies.Titanic.director;

let genre = document.getElementById("genre").innerHTML = movies.Titanic.genre;

let filmRating = document.getElementById("filmRating").innerHTML = movies.Titanic.filmRating;

let audienceScore = document.getElementById("audienceScore").innerHTML = movies.Titanic.audienceScore;

let description = document.getElementById("description").innerHTML = movies.Titanic.description;

let cast = "";
let i;
for (i = 0; i < movies.Titanic.cast.length; i++) {
    cast += movies.Titanic.cast[i].actor + " as " + movies.Titanic.cast[i].role + "<br><br>";
}
document.getElementById("cast").innerHTML = cast;

let reviews = "";
let j;
for (j = 0; j < movies.Titanic.reviews.length; j++) {
    reviews += movies.Titanic.reviews[j].username + ": " + movies.Titanic.reviews[j].content + "<br><br>";
}
document.getElementById("reviews").innerHTML = reviews;