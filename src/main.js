document.addEventListener("DOMContentLoaded", () => {
  let movies = ["Home alone(1994)", "Ghost busters", "Battleship"];
  // let movies = ["hi"]
  const movieList = document.getElementById("movie-list");
  const addFilmBtn = document.getElementById("add-film");
  const deleteFilmBtn = document.getElementById("delete-film");
  let movieListContent = "";

  window.deleteFilm = (filmName) => {
    movies = movies.filter((movie) => movie != filmName);
    console.log(movies);
    renderFilms(movies);
  };

  const renderFilms = (movies) => {
    if (movies.length > 0) {
      movieListContent = movies
        .map(
          (movie) => ` <li class="list-item card" data-film="${movie}">
        <span>${movie}</span>
        <button onclick="deleteFilm('${movie}')" type="button">delete</button>
        </li>`
        )
        .join(" ");
    } else {
      movieListContent = `<li class="empty-list-item">Add a movie for your list</li>`;
    }
    movieList.innerHTML = movieListContent;
  };

  const addFilm = () => {
    const filmName = prompt("Input your film name");
    // console.log(filmName);
    if (!filmName || filmName.length < 2) return;
    movies.push(filmName);
    renderFilms(movies);
  };

  addFilmBtn.addEventListener("click", addFilm);
  console.log("loaded");
  renderFilms(movies);
});
