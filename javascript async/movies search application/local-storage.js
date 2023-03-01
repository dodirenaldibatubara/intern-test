const baseUrl = "https://imdb8.p.rapidapi.com/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const loader = document.getElementById("loader");
const sort = document.getElementById("sort");
const btnFavorite = document.getElementById("btn-favorite");
let movieFavoriteList;
let moviesList;
let btnLikes;

// loader
function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

hideLoader();

sort.addEventListener("change", function () {
  sortMovies(sort.value);
});

btnFavorite.addEventListener("click", function (e) {
  e.preventDefault();
  let topFavoriteMovie = movieFavoriteList.slice().sort((a, b) => b.likes - a.likes);

  console.log(topFavoriteMovie);
  showFavoriteMovie(topFavoriteMovie);
});

function sortMovies(value) {
  let rankMovies;

  if (value == "1") {
    rankMovies = moviesList.slice().sort((a, b) => a.rank - b.rank);
  } else {
    rankMovies = moviesList.slice().sort((a, b) => b.rank - a.rank);
  }
  showMovies(rankMovies);
}

// submit / search function
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchValue = search.value;
  const sortValue = searchValue;

  // Add the search value to the URL as a query string
  window.history.pushState({}, "", `?search=${searchValue}&sort=${sortValue}`);

  getData();
});

// Get data from API
async function getData() {
  showLoader();

  // Get the search value from the query string
  const searchParams = new URLSearchParams(window.location.search);
  const searchValue = searchParams.get("search") || "";

  if (searchValue) {
    const searchUrl = baseUrl + "auto-complete?q=" + searchValue;

    // const searchUrl = baseUrl + "auto-complete?q=" + query;
    // const searchUrl = baseUrl + "auto-complete?q=" + search.value;

    const response = await fetch(searchUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ae85372f27mshd40df6a7f6a1b5ep150047jsna193206ae120",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    });

    let result = await response.json();
    moviesList = await result.d;
    hideLoader();
    console.log(moviesList);
    // show favorite movies data
    getFavoriteMovies();

    // function show movies
    showMovies(moviesList);
  } else {
    hideLoader();
  }
}

// Function get movie favorite
function getFavoriteMovies() {
  movieFavoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteMoviesElement = document.querySelector(".movies");
  // console.log(movieFavoriteList);
  // Kosongkan konten HTML pada elemen favorit film
  favoriteMoviesElement.innerHTML = "";
}

// show favoriteMovie
function showFavoriteMovie(movies) {
  const favoriteMoviesElement = document.querySelector(".movies");

  // Kosongkan konten HTML pada elemen favorit film
  favoriteMoviesElement.innerHTML = "";
  movies.forEach((movie) => {
    const title = movie.title;
    const image = movie.image;
    const description = movie.description;
    const likes = movie.likes;
    const rank = parseInt(movie.rank);

    const movieElement = `
    <div class="movie col col-md-3 col-sm-6 col-12 my-5">
      <div class="card">
        <img src="${image}" class="card-img-top" alt="..." height="450" />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${description}</p>
          <h6 class="card-subtitle mb-2 text-muted">${rank || "no rank"}</h6>
          <p></p>
        </div>
      </div>
    </div>
  `;

    favoriteMoviesElement.innerHTML += movieElement;
  });
}

// // Show movieList function
function showMovies(movies) {
  // if (sort.value == "1") {
  document.querySelector(".movies").innerHTML = "";
  movies.map((item) => {
    const title = item.l;
    const image = item.i.imageUrl;
    const description = item.s;
    const rank = item.rank;
    let likes = item.likes || 0;

    const movie = `<div class="movie col col-md-3 col-sm-6 col-12 my-5">
          <div class="card">
            <img src="${image}" class="card-img-top" alt="..." height="450" />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${rank}</h6>
              <p>${description}</p>
              <button class="btn btn-primary  btnLike" >${isMovieInFavorites(title) ? "added to favorite" : "like"} </button>
            </div>
          </div>
        </div>`;

    document.querySelector(".movies").innerHTML += movie;
  });

  // function to check if movie already exists in favorites
  function isMovieInFavorites(title) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((movie) => movie.title === title);
  }

  // button likes

  btnLikes = document.querySelectorAll(".btnLike");
  console.log(btnLikes);

  btnLikes.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // let child = e.target.querySelector(".like-count");
      // child.innerHTML = parseInt(child.innerHTML) + 1;
      e.target.classList.add("like-background");
      // console.log(child);

      // add movie favorite to local storage
      const movieTitle = e.target.parentElement.querySelector(".card-title").textContent;
      // const movieLikes = parseInt(child.innerHTML);
      // if (!isMovieInFavorites(movieTitle)) {
      const movieImage = e.target.parentElement.parentElement.querySelector("img").getAttribute("src");
      const movieDescription = e.target.parentElement.querySelector("p").textContent;

      const movieRank = e.target.parentElement.querySelector(".card-subtitle").textContent;
      console.log(isMovieInFavorites(movieTitle));
      if (!isMovieInFavorites(movieTitle)) {
        addToFavorite(movieTitle, movieImage, movieDescription, movieRank);
      }

      // 1. buatin function ngecek keberadaan movie di favorite --done
      // 2. manggil function, sekalian check pake if
      // 3. kalo misalnya functionnya ngasi tau kalo movie tsb gak ada di favorite, masukkan dia kedalam favorite

      // end add movie favorite to local storage
      // }
    });
  });
}

// function add to favorite from button like
function addToFavorite(title, image, description, likes, rank) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const newFavorite = {
    title,
    image,
    description,
    likes,
    rank,
  };

  favorites.push(newFavorite);

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

window.onload = getData;
