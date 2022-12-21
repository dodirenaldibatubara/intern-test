// Dom Beginer

//  Select an element

let titleOne = document.getElementById("carName1");
console.log(titleOne);
// inner html berfungsi untuk mengubah vakue pada html yang kita tujukan.

titleOne.innerHTML = "Toyota kijang";

// megubah harga degnan inner html

//  Select an element

let priceOne = document.getElementById("price1");
console.log(priceOne);

priceOne.innerHTML = "RP.1000,000";

// select by tag name

let button = document.getElementsByTagName("a");
console.log(button);

// manipulasi element yang di ambil dengan menggunakan tag name. output akan menghasilkan data mirip array, dan cara aksesnya juga mirip array dimana harus berdasarkan index yang di mulai dari 0
button[0].innerHTML = "di rubah di js";

button[3].innerHTML = "di rubah di js";

button[4].innerHTML = "Sold out";

// menyeleksi button view details dengan menggunakan query selector
// dengan cara menambahkan kelas khusus ke pada setiap elee=ment yang mau di targetkan

// state barang tersedia
let stock = true;

let btnViewDetails = document.querySelectorAll("a.btn-view-details");
console.log(btnViewDetails);

// lakukan pengulangan untuk mengabil semua class btn-view-details

for (let i = 0; i < btnViewDetails.length; i++) {
  if (!stock) {
    btnViewDetails[i].innerHTML = "sold out";
    btnViewDetails[i].classList.add("btn-danger");
    btnViewDetails[i].classList.remove("btn-primary");
    //   menambah kelas baru dengan js
    btnViewDetails[i].classList.add("disabled");
  }
}
