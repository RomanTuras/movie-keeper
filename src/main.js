let movies = ["Home alone(1994)", "Ghost busters", "Battleship"];
// let movies = []
const movieList = document.getElementById("movie-list");
let movieListContent = `<li class="empty-list-item">Add a movie for your list</li>`;

if (movies.length > 0) {
  movieListContent = movies
    .map(
      (e) => ` <li class="list-item">
            <span>${e}</span>
            <button type="button">delete</button>
          </li>`
    )
    .join(" ");

  }
movieList.innerHTML = movieListContent;
