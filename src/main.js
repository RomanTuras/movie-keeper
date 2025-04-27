document.addEventListener("DOMContentLoaded", () => {
  let movies = ["Home alone(1994)", "Ghost busters", "Battleship"];
  // let movies = []
  const movieList = document.getElementById("movie-list");
  const addFilmBtn = document.getElementById("add-film");
  const deleteFilmBtn = document.getElementById("delete-film");
  let movieListContent = `<li class="empty-list-item">Add a movie for your list</li>`;

  window.deleteFilm = (filmName) => {
    movies = movies.filter((movie) => movie != filmName);
    renderFilms(movies);
  };

  const renderFilms = (movies) => {
    if (movies.length > 0) {
      movieListContent = movies
        .map(
          (e) => ` <li class="list-item" data-film="${e}">
        <span>${e}</span>
        <button onclick="deleteFilm('${e}')" type="button">delete</button>
        </li>`
        )
        .join(" ");
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
  renderFilms(movies);
});
