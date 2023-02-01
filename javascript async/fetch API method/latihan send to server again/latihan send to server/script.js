const form = document.getElementById("form");
const output = document.getElementById("output");

async function sendToServer(data) {
  const response = await fetch("https://pie.dev/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) return (output.innerHTML = "gagal");

  const result = await response.json();

  output.innerHTML = `Nama anda : ${result.json.name}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // untuk membuat progres bar (loading)
  output.innerHTML = "sending data....";

  const name = document.getElementById("name").value;

  sendToServer({ name });
});
