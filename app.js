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
      document.getElementById(
        "height"
      ).innerText = `Height: ${data.results[0].height}`;
      document.getElementById(
        "mass"
      ).innerText = `Mass: ${data.results[0].mass}`;
      document.getElementById(
        "haircolor"
      ).innerText = `Hair Color: ${data.results[0].hair_color}`;
      document.getElementById(
        "eyecolor"
      ).innerText = `Eye Color: ${data.results[0].eye_color}`;
      document.getElementById(
        "birthyear"
      ).innerText = `Birth Year: ${data.results[0].birth_year}`;
      document.getElementById(
        "gender"
      ).innerText = `Gender: ${data.results[0].gender}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};
