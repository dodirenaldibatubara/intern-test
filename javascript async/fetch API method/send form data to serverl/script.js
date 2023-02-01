const form = document.getElementById("form");
const output = document.getElementById("output");

// fungsi sendToServer

async function sendToServer(data) {
  const response = await fetch("https://pie.dev/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(response);

  result = await response.json();

  output.innerHTML = `Nama anda : ${result.json.name}`;
}

// end Fungsi sendToServer

form.addEventListener("submit", function (e) {
  // fungsi e.prevent default di sini ialah untuk mencegah prilaku form dimana jika di klik submit maka dia akan otomatis refresh halaman dan kita tidak mau itu maka kita buat method prevent default agar saat di submit halamannya tida ter refresh
  e.preventDefault();

  const name = document.getElementById("name").value;

  //   funsi ini berguna untuk mengirim data ke server dari apa yang kita input dalam form.
  // dan kita buaat fungsinya di atas agar lebih rapi, di sini kita hanya memanggil fungsinya
  sendToServer({ name });
});
