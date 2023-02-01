const form = document.getElementById("form");
const output = document.getElementById("output");

async function sendToServer(image) {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch("https://pie.dev/post", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  output.innerHTML = `<img src="${result.files.image}" width = "200">`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const image = document.getElementById("image").files[0];
  sendToServer(image);
});
