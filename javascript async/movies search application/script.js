const baseUrl = "https://imdb8.p.rapidapi.com/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const loader = document.getElementById("loader");

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
  console.log(list);

  document.querySelector(".movies").innerHTML = "";

  list.map((item) => {
    const title = item.l;
    const image = item.i.imageUrl;
    const descripttion = item.s;
    const rank = item.rank;
    const movie = `<div class="movie col col-md-3 col-sm-6 col-12 my-5">
      <div class="card">
        <img src="${image}" class="card-img-top" alt="..." height="450" />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${rank}</h6>
          <p>${descripttion}</p>
        </div>
      </div>
    </div>`;

    document.querySelector(".movies").innerHTML += movie;
  });
}

getData();
