const request = fetch("https://pie.dev/post", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },

  body: JSON.stringify({
    username: "dodi",
    passeord: "batubara",
  }),
})
  .then((response) => {
    console.log(response);
    if (response.ok === false) {
      return console.log("request gagal");
    }
    return response.json();
  })
  .then((response) => console.log(response));
