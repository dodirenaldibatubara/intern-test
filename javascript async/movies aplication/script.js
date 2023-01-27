const apiKey = "api_key=7050e7765d45b3b2e7e9a6b3da9b18a5";
const baseUrl = "https://api.themoviedb.org/3/";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const imageUrl = "https://image.tmdb.org/t/p/w500";
const main = document.getElementById("main");

function showMovies() {
  main.innerHTML = "";

  data.foreach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList("movie");
    movieEl.innerHTML = `
    <div class="card">
            <img src="${imageUrl + poster_path}" class="card-img-top" alt="${title}" />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h6 class="card-subtitle mb-2 text-muted"></h6>
              <p></p>
              <a href="#" class="btn btn-primary">Show details</a>
            </div>
    `;
    main.appendChild(movieEl);
  });
}

function getMovie(url) {
  fetch(url)
    .then((res) => res.json())

    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}


async function getMovie(url) {
  const data = await fetch(url)
  showMovies(data.results)
}

getMovie(apiUrl);
