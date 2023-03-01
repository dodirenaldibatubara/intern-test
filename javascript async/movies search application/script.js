const baseUrl = "https://imdb8.p.rapidapi.com/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const loader = document.getElementById("loader");
const filterRank = document.getElementById("filterRank");

// ambil data dari pilihan user
let rankValue = filterRank.addEventListener("change", function () {
  let filterRankValue = this.value;
  console.log(filterRankValue);
});

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

hideLoader();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Set query string dengan value dari search
  window.location.search = `query=${search.value}`;

  getData();
});

async function getData() {
  // Ambil value dari query string
  const query = new URLSearchParams(window.location.search).get("query");
  if (!query) return;

  const searchUrl = baseUrl + "auto-complete?q=" + query;
  // const searchUrl = baseUrl + "auto-complete?q=" + search.value;

  showLoader();
  const response = await fetch(searchUrl, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f3baa28742msh53ccd4de88b9f4ep128c5bjsna6d8dc65ff61",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  });

  let result = await response.json();
  const list = await result.d;
  hideLoader();
  // console.log(list);

  // Fitur filter rank
  // urutkan dari yang tertinggi ke terendah
  let maxRankMovies = list.slice().sort((a, b) => a.rank - b.rank);
  console.log(maxRankMovies);
  // urutkan dari yang terendah ke tertinggi
  let minRankMovies = list.slice().sort((a, b) => b.rank - a.rank);
  console.log(minRankMovies);

  // End Fitur filter rank

  // kosongkan kembali list jika dilakukan pengulangan pemanggilan(pemanggilan lebih dari satu kali)
  document.querySelector(".movies").innerHTML = "";

  // menampilkan daftar movie dari rank ter tinggi ke ter rendah
  maxRankMovies.map((item) => {
    const title = item.l;
    const image = item.i.imageUrl;
    const description = item.s;
    const rank = item.rank;
    const movie = `<div class="movie col col-md-3 col-sm-6 col-12 my-5">
      <div class="card">
        <img src="${image}" class="card-img-top" alt="..." height="450" />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${rank}</h6>
          <p>${description}</p>
        </div>
      </div>
    </div>`;

    document.querySelector(".movies").innerHTML += movie;
  });
}

getData();

// ----------------------
// function get date

var movie;

function getData() {
  // call async to get data

  return movie;
}

// sorting date
function sortMovie(movie) {
  // do sort
  // reurn sorted movie
}

// render template
function reder(movie) {
  // do render template
  // render to dom
}

// on load
window.load(function () {
  movie = getData();

  this.movie = movie;

  render(movie);
});

// when sort selected
window.buttonSort.on.change(function () {
  sortedMovie = sortMovie(movie);

  render(movie);
});
