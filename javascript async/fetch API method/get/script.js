// fetch adalah method yang ada di javascript yang biasa di gunakan untuk mengambil dan mengirim data dari kan ke API
// fetch akan mengirim 2 parametert yaitu endpoint dan option di mana option ini nantinya di tulis seperti object.

const request = fetch("https://pie.dev/get")
  .then((response) => {
    if (response.ok === false) {
      console.log("request gagal");
    }
    // fungsi json() di sini aialah untuk membuat response ke dalam bentuk json. karena kalau diambil dari api masih berbentuk promise. belum berbetuk json
    return response.json();
  })
  .then((response) => console.log(response));
