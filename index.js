const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const catlisteContainer = document.querySelector("#catlisteContainer");

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    catlisteContainer.innerHTML += `<a href=produktliste.html?cat=${encodeURI(element.category)}> ${element.category} </a>`;
  });
}
