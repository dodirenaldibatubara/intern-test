// seleksi element yang akan di manipulasi

let cars = document.getElementById("cars");

// buat function saveCars nama function harus sesuai dengan nama onclik pada html

let i = 0;

function saveCars() {
  let carName = document.getElementById("name").value;
  let carPrice = document.getElementById("price").value;
  let carImage = document.getElementById("image").value;
  i++;
  cars.innerHTML +=
    `
  <div class="col-lg-3 col-md-6 col-12 mt-5">
  <div class="card">
    <img src=" ` +
    carImage +
    ` " class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title" > ` +
    carName +
    `</h5>
      <p class="card-text" "> $` +
    carPrice +
    `</p>
      <a href="#" class="btn btn-view-details btn-primary w-100">View Details</a>
      <a href="#" class="btn btn-secondary w-100 mt-2">View Details</a>
    </div>
  </div>
</div>`;

  carName = document.getElementById("name").value = "";
  carPrice = document.getElementById("price").value = "";
  carImage = document.getElementById("image").value = "";
}
