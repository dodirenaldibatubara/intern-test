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
  console.log(response);

  const json = await response.json();

  output.innerHTML = await json.json.name;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;

  sendToServer({ name });
});
