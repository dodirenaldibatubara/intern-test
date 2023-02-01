const form = document.getElementById("form");
const output = document.getElementById("output");

async function sendToServer(image) {
  // console.log(data);
  const formData = new FormData();

  // ini bertujuan membuat key dan value pada foem data dimana keynya adalah image dan valuenya di ambil dari parameterdi ats
  formData.append("image", image);

  const response = await fetch("https://pie.dev/post", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) return (output.innerHTML = "gagal mengirim data");

  const result = await response.json();
  console.log(result);

  output.innerHTML = `<img src="${result.files.image}"> `;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // untuk membuat progres bar (loading)
  output.innerHTML = "loading";

  // ingat masukkan indexnya agar imagenya bisa di eksekusi
  const image = document.getElementById("image").files[0];

  sendToServer(image);
});
