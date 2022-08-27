const url = "https://swapi.dev/api/people";
const event = document
  .getElementById("btn-el")
  .addEventListener("click", () => {
    console.log("btn");
    starWars();
  });

const starWars = () => {
  const search = document.getElementById("input-el").value;
  const url = `https://swapi.dev/api/people/?search=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("display-el").innerText = data.results[0].name;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};
