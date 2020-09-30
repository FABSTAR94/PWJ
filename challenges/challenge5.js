//CHALLENGE5: Label good movies & bad movies

let movie_result;

function goodOrBadMovie(movie_rating) {
  if (movie_rating >= 7) {
    movie_result = "Good Movie";
  } else {
    movie_result = "Bad Movie";
  }
  return movie_result;
}

console.log(goodOrBadMovie(8));
console.log(goodOrBadMovie(3));
console.log(goodOrBadMovie(6));
console.log(goodOrBadMovie(10));
