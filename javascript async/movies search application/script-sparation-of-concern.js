const baseUrl = "https://imdb8.p.rapidapi.com/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const loader = document.getElementById("loader");
const sort = document.getElementById("sort");
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

    // function show movies
    showMovies(moviesList);
  } else {
    hideLoader();
  }
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
              <button class="btn btn-primary  btnLike" >Like <span class="like-count">${likes}</span></button>
            </div>
          </div>
        </div>`;

    document.querySelector(".movies").innerHTML += movie;
  });

  btnLikes = document.querySelectorAll(".btnLike");
  console.log(btnLikes);

  btnLikes.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      console.log(e.target);
      console.log("tambah like");
      let child = e.target.querySelector(".like-count");
      child.innerHTML = parseInt(child.innerHTML) + 1;
      e.target.classList.add("like-background");
      console.log(child);
    });
  });
}

window.onload = getData;
